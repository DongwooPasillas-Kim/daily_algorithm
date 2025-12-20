"""
Write a Python program that matches a string that has an a followed by zero or more b's.
"""

import re

def is_a_0p_bs(string_to_check: str) -> bool:
    p = re.compile('^ab*$')
    return bool(p.match(string_to_check))

if __name__ == '__main__':
    print(f"abc : {is_a_0p_bs('abc')}")
    print(f"ab : {is_a_0p_bs('ab')}")
    print(f"abb : {is_a_0p_bs('abb')}")
    print(f"bbbb : {is_a_0p_bs('bbbb')}")
