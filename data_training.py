import os  
import numpy as np 
from tensorflow.keras.utils import to_categorical
import tensorflow as tf

from keras.layers import Input, Dense 
from keras.models import Model
from sklearn.metrics import confusion_matrix

import matplotlib.pyplot as plt
import seaborn as sn

 
is_init = False
size = -1

label = []
dictionary = {}
c = 0

for i in os.listdir():
	if i.split(".")[-1] == "npy" and not(i.split(".")[0] == "labels"):  
		if not(is_init):
			is_init = True 
			X = np.load(i)
			size = X.shape[0]
			y = np.array([i.split('.')[0]]*size).reshape(-1,1)
		else:
			X = np.concatenate((X, np.load(i)))
			y = np.concatenate((y, np.array([i.split('.')[0]]*size).reshape(-1,1)))

		label.append(i.split('.')[0])
		dictionary[i.split('.')[0]] = c  
		c = c+1


for i in range(y.shape[0]):
	y[i, 0] = dictionary[y[i, 0]]
y = np.array(y, dtype="int32")

###  hello = 0 nope = 1 ---> [1,0] ... [0,1]

y = to_categorical(y)

X_new = X.copy()
y_new = y.copy()
counter = 0 

cnt = np.arange(X.shape[0])
np.random.shuffle(cnt)

for i in cnt: 
	X_new[counter] = X[i]
	y_new[counter] = y[i]
	counter = counter + 1


ip = Input(shape=(X.shape[1]))

m = Dense(512, activation="relu")(ip)
m = Dense(256, activation="sigmoid")(m)

op = Dense(y.shape[1], activation="softmax")(m) 

model = Model(inputs=ip, outputs=op)

# model = keras.Sequential([
# 	keras.layers.Dense(512, activation="relu", input_shape=(X.shape[1],)),
# 	keras.layers.Dense(256, activation="sigmoid"),
# ])
model.compile(optimizer='adam', loss="categorical_crossentropy", metrics=['acc'])

tb_callback1 = tf.keras.callbacks.TensorBoard(log_dir="./logs", histogram_freq=1)

model.fit(X, y, epochs=60, callbacks=[tb_callback1])
loss, accuracy = model.evaluate(X, y)

print(f"Test Loss: {loss}, Test Accuracy: {accuracy}")

y_pred = model.predict(X_new)
y_pred_classes = np.argmax(y_pred, axis=1)
y_true_classes = np.argmax(y_new, axis=1)
confusion_mtx = confusion_matrix(y_true_classes, y_pred_classes)

plt.figure(figsize=(10, 8))
sn.heatmap(confusion_mtx, annot=True, fmt='d', cmap='Blues', xticklabels=label, yticklabels=label)
plt.xlabel('Predicted')
plt.ylabel('True')
plt.show()

# y_pred = model.predict(X_new)
# y_pred_classes = np.argmax(y_pred, axis=1)

# Create a histogram of predicted emotions
# plt.figure(figsize=(10, 6))
# plt.hist(y_pred_classes, bins=len(label), align='left', rwidth=0.8, alpha=0.75, color='skyblue', edgecolor='black')
# plt.xticks(range(len(label)), label, rotation=45)
# plt.xlabel('Emotion')
# plt.ylabel('Frequency')
# plt.title('Histogram of Predicted Emotions')
# plt.show()


model.save("model.h5")
np.save("labels.npy", np.array(label))

