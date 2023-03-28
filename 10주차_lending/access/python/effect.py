from PIL import Image

# 이미지 파일 열기
image = Image.open("./access/images/01.jpeg")

# 흑백으로 변환
image = image.convert("L")

# 컬러로 변환
image = image.convert("RGB")

# 이미지 파일 저장
image.save("gray_01.jpg")

