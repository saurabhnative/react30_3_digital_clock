import time
from tkinter import *

root = Tk()
root.title("Digital Clock")
root.geometry("300x80") ## dimensions
## color 
label = Label(root, font=("Black", 30, 'bold'), bg="yellow", fg="Black", bd =30)
label.grid(row=0, column=1)
## function for clock time
def clock():
    text_input = time.strftime("%H:%M:%S")
    label.config(text=text_input)
    label.after(200, clock)
    
clock()
root.mainloop()
