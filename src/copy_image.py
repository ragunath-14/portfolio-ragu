import shutil
import os

src = r"C:\Users\ragu0\.gemini\antigravity\brain\fb36f8ec-6960-4318-b691-e3866f697268\media__1773748323422.jpg"
dst = r"c:\Users\ragu0\Desktop\portfolio ragu\ragu\src\assets\hero_avatar.jpg"

try:
    if os.path.exists(src):
        print(f"Source exists: {src}")
    else:
        print(f"Source does not exist: {src}")
        exit(1)
        
    os.makedirs(os.path.dirname(dst), exist_ok=True)
    shutil.copy2(src, dst)
    print(f"Successfully copied to {dst}")
except Exception as e:
    print(f"Error: {e}")
