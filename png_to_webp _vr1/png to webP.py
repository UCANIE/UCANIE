from PIL import Image
import os

# 변환할 이미지가 저장된 폴더 경로
input_folder = "/Users/jeong-yuchan/Desktop/TracMe_image/TracMe 에셋/banners"
# 변환된 이미지가 저장될 폴더 경로
output_folder = "/Users/jeong-yuchan/Desktop/TracMe_image/tracmenormalimage"

# 출력 폴더가 없으면 생성
if not os.path.exists(output_folder):
    os.makedirs(output_folder)

# 폴더 내 모든 PNG 파일을 WebP로 변환
for file_name in os.listdir(input_folder):
    if file_name.endswith(".png"):
        file_path = os.path.join(input_folder, file_name)
        with Image.open(file_path) as img:
            webp_file_name = os.path.splitext(file_name)[0] + ".webp"
            webp_file_path = os.path.join(output_folder, webp_file_name)
            img.save(webp_file_path, "WEBP")
            print(f"Converted: {file_name} -> {webp_file_name}")

print("All PNG images have been converted to WebP.")