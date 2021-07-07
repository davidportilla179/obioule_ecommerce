import joblib
import numpy as np
import sys

price = sys.argv[1]
c_product = sys.argv[2]
c_packing = sys.argv[3]
model = sys.argv[4]
######## Prediccciones ##########
newX = np.array([[price, c_product, c_packing]])

cargar = open(model,"rb")
model = joblib.load(cargar)
cargar.close()

print(model.predict(newX)[0])


