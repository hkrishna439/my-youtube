....

# Debouncing

lets think..

typing slow = 200ms
typing slow = 30ms

......
Performance:

iphone pro max = 14 letters

- without debouncing 14 API calls \* 1000 = 14000 api calls
- with debouncing 3 API calls \* 1000 = 3000 api calls

Debouncing with 200ms

- if difference between two key strokes is < 200ms - DECLINE the API call
- if > 200ms - MAKE the API call

Cache:
time complexity to search in array = O(n)
time complexity to search in Object = O(1)

new Map()
