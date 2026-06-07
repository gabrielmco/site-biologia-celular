from PIL import Image
import os
import shutil

brain_dir = r"C:\Users\biel3\.gemini\antigravity-ide\brain\ac9c8ffd-950e-4262-a65f-c460a4150a55"
target_dir = r"c:\Users\biel3\OneDrive\Documentos\projetos git hub\Landing-Pages-e-Conceitos\Estudo de Animacoes Scroll - 3.5 stars\src\assets\images"

# Maps prefix to target filename
files = {
    "hero_card_1": "hero_card_1.webp",
    "hero_card_2": "hero_card_2.webp",
    "hero_card_3": "hero_card_3.webp",
    "capsule_footer_1": "cap1_new.webp"
}

for filename in os.listdir(brain_dir):
    if filename.endswith(".png"):
        for prefix, target_name in files.items():
            if filename.startswith(prefix):
                png_path = os.path.join(brain_dir, filename)
                webp_path = os.path.join(target_dir, target_name)
                print(f"Converting {png_path} to {webp_path}")
                img = Image.open(png_path)
                img.save(webp_path, "WEBP", quality=90)
                break
print("Done.")
