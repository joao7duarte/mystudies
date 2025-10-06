from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

driver = webdriver.Chrome()
driver.get("https://orteil.dashnet.org/cookieclicker/")

time.sleep(5)

lang = driver.find_element(By.ID, "langSelect-PT-BR")
lang.click()

time.sleep(3)


for i in range(1000):
    bigCookie = driver.find_element(By.ID, "bigCookie")
    bigCookie.click()

time.sleep(4)

for i in range(1000):
    bigCookie = driver.find_element(By.ID, "bigCookie")
    bigCookie.click()


input("Pressione Enter quando quiser fechar o navegador...")
driver.quit()



