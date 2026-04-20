"""Capture website screenshots for the homepage redesign.

Generates:
- public/images/vantagedash-showcase.png  (1280x800 viewport, full hero)
- public/images/p1-packaging-showcase.png (1280x800 viewport, full hero)
- public/images/work-vantagedash.png      (1280x800, scaled smaller)
- public/images/work-p1-packaging.png     (1280x800)
- public/images/work-fld.png              (1280x800)
- public/images/hero-mockup.png           (uses VantageDash showcase)
"""
import os
import sys
import shutil
from pathlib import Path
from playwright.sync_api import sync_playwright

OUT_DIR = Path(__file__).parent.parent / "public" / "images"
OUT_DIR.mkdir(parents=True, exist_ok=True)

TARGETS = [
    ("https://vantagedash.io",      "vantagedash-showcase.png"),
    ("https://p1packaging.com",     "p1-packaging-showcase.png"),
    ("http://localhost:4321/",      "fld-showcase.png"),
]

def main():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        ctx = browser.new_context(
            viewport={"width": 1280, "height": 800},
            device_scale_factor=2,
            color_scheme="dark",
        )
        page = ctx.new_page()
        for url, fname in TARGETS:
            out = OUT_DIR / fname
            print(f"-> {url} -> {out}")
            try:
                page.goto(url, wait_until="networkidle", timeout=30000)
            except Exception as e:
                print(f"   networkidle timeout, falling back to load: {e}")
                try:
                    page.goto(url, wait_until="load", timeout=30000)
                except Exception as e2:
                    print(f"   FAILED: {e2}")
                    continue
            # Give animations a moment
            page.wait_for_timeout(2000)
            # Capture viewport-only (above-the-fold) for cleaner showcase look
            page.screenshot(path=str(out), full_page=False)
            print(f"   saved {out.stat().st_size} bytes")
        browser.close()

    # Duplicate the showcase shots for the smaller "work" cards (same image works fine)
    for src_name, dst_name in [
        ("vantagedash-showcase.png", "work-vantagedash.png"),
        ("p1-packaging-showcase.png", "work-p1-packaging.png"),
        ("fld-showcase.png", "work-fld.png"),
        ("vantagedash-showcase.png", "hero-mockup.png"),
    ]:
        src = OUT_DIR / src_name
        dst = OUT_DIR / dst_name
        if src.exists():
            shutil.copy2(src, dst)
            print(f"copied {src_name} -> {dst_name}")

if __name__ == "__main__":
    main()
