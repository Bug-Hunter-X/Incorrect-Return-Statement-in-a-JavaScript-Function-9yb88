# Incorrect Return Statement Bug in JavaScript

This repository demonstrates a common, yet subtle, bug in JavaScript functions: incorrect return statements. The bug is present in the `foo` function, which prematurely returns 0 when either input is 0, potentially leading to unexpected behavior.

## Bug Description

The function `foo` is designed to add two numbers. However, its current implementation contains an error in its conditional statement. If either input `a` or `b` is 0, it immediately returns 0 regardless of the value of the other input.

## Solution

The solution addresses the incorrect return statement to improve the functionality. The improved `foo` function addresses this issue by adding a conditional check to handle situations where one of the inputs is 0, providing more nuanced behavior and ensuring the correctness of its return value.