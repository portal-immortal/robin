"""
Generates placeholder imagery using only brand colors + a simple geometric
(rub el hizb-inspired) motif — no photos, no third-party assets, no
copyright risk. These exist purely so the Astro Image pipeline has real
files to optimize; swap them for real photography before launch.
"""
import math
import os
from PIL import Image, ImageDraw, ImageFont

PRIMARY = (15, 122, 61)
PRIMARY_DARK = (10, 80, 39)
SECONDARY = (212, 175, 55)
SURFACE = (248, 250, 249)
WHITE = (255, 255, 255)

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def lerp(a, b, t):
    return tuple(int(a[i] + (b[i] - a[i]) * t) for i in range(3))


def gradient(w, h, c1, c2, diagonal=True):
    img = Image.new("RGB", (w, h), c1)
    px = img.load()
    for y in range(h):
        for x in range(w):
            t = ((x / w) + (y / h)) / 2 if diagonal else y / h
            px[x, y] = lerp(c1, c2, t)
    return img


def draw_star(draw, cx, cy, r, color, width=2, rotation=0):
    """8-point star (rub el hizb style) built from two overlapping squares."""
    pts1 = []
    pts2 = []
    for i in range(4):
        a1 = math.radians(90 * i + rotation)
        a2 = math.radians(90 * i + 45 + rotation)
        pts1.append((cx + r * math.cos(a1), cy + r * math.sin(a1)))
        pts2.append((cx + r * math.cos(a2), cy + r * math.sin(a2)))
    draw.polygon(pts1, outline=color, width=width)
    draw.polygon(pts2, outline=color, width=width)


def add_pattern(img, color, opacity_layer_alpha=40, step=90):
    overlay = Image.new("RGBA", img.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)
    w, h = img.size
    for y in range(-step, h + step, step):
        for x in range(-step, w + step, step):
            draw_star(draw, x, y, step * 0.42, color + (opacity_layer_alpha,), width=2)
    base = img.convert("RGBA")
    return Image.alpha_composite(base, overlay).convert("RGB")


def label(img, text, sub=None):
    draw = ImageDraw.Draw(img)
    w, h = img.size
    try:
        font = ImageFont.truetype(
            "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", int(h * 0.055)
        )
        font_sub = ImageFont.truetype(
            "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", int(h * 0.032)
        )
    except Exception:
        font = ImageFont.load_default()
        font_sub = font
    bbox = draw.textbbox((0, 0), text, font=font)
    tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
    draw.text(((w - tw) / 2, (h - th) / 2 - (10 if sub else 0)), text, font=font, fill=WHITE)
    if sub:
        bbox2 = draw.textbbox((0, 0), sub, font=font_sub)
        tw2, th2 = bbox2[2] - bbox2[0], bbox2[3] - bbox2[1]
        draw.text(((w - tw2) / 2, (h - th2) / 2 + th + 6), sub, font=font_sub, fill=(255, 255, 255, 200))
    return img


def make(path, w, h, c1, c2, text, sub=None, pattern_color=WHITE):
    img = gradient(w, h, c1, c2)
    img = add_pattern(img, pattern_color, opacity_layer_alpha=28)
    img = label(img, text, sub)
    os.makedirs(os.path.dirname(path), exist_ok=True)
    img.save(path, quality=88)
    print("wrote", path)


# Hero
make(
    f"{BASE}/src/assets/images/hero/hero-santri.jpg",
    720, 860, PRIMARY, PRIMARY_DARK, "Roudhotuttholibin", "Kegiatan Santri"
)

# Teachers (6)
teacher_names = ["Ust. Ahmad", "Ust. Zainal", "Usth. Aisyah", "Ust. Fauzan", "Usth. Halimah", "Ust. Rifqi"]
for i, name in enumerate(teacher_names, start=1):
    make(
        f"{BASE}/src/assets/images/teachers/teacher-{i}.jpg",
        400, 400, PRIMARY, lerp(PRIMARY, SECONDARY, 0.35), name
    )

# News thumbnails (6)
for i in range(1, 7):
    make(
        f"{BASE}/src/assets/images/news/news-{i}.jpg",
        480, 300, lerp(PRIMARY, PRIMARY_DARK, i / 8), PRIMARY_DARK, f"Berita {i}"
    )

# Gallery (12)
for i in range(1, 13):
    c1 = lerp(PRIMARY, SECONDARY, (i % 5) / 6)
    make(
        f"{BASE}/src/assets/images/gallery/gallery-{i}.jpg",
        500, 500, c1, PRIMARY_DARK, f"Galeri {i}"
    )

# OG cover (public, referenced by URL not import)
make(f"{BASE}/public/images/og-cover.jpg", 1200, 630, PRIMARY, PRIMARY_DARK, "Pondok Pesantren", "Roudhotuttholibin")

# Logo (square, transparent-ish background not needed for placeholder)
logo = Image.new("RGB", (512, 512), PRIMARY)
d = ImageDraw.Draw(logo)
draw_star(d, 256, 256, 190, SECONDARY, width=8)
try:
    f = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 220)
except Exception:
    f = ImageFont.load_default()
bbox = d.textbbox((0, 0), "R", font=f)
tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
d.text(((512 - tw) / 2, (512 - th) / 2 - 20), "R", font=f, fill=WHITE)
os.makedirs(f"{BASE}/public/images", exist_ok=True)
logo.save(f"{BASE}/public/images/logo.png")
print("wrote logo.png")

# Favicons
logo.resize((32, 32)).save(f"{BASE}/public/favicon/favicon-32x32.png")
logo.resize((180, 180)).save(f"{BASE}/public/favicon/apple-touch-icon.png")
logo.resize((192, 192)).save(f"{BASE}/public/favicon/android-chrome-192x192.png")
logo.resize((512, 512)).save(f"{BASE}/public/favicon/android-chrome-512x512.png")
print("wrote favicons")
