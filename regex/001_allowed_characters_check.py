"""
Write a Python program to check that a string contains
only a certain set of characters (in this case a-z, A-Z and 0-9)
"""

import re


def check_alphanumeric(string_to_check: str) -> bool:
    p = re.compile("[^a-zA-Z0-9]")
    if p.match(string_to_check):
        print(
            "A non-alphanumerical character "
            + f"'{p.match(string_to_check).group()}' has been found"
        )
        return False
    print("All characters are alphanumerical.")
    return True


if __name__ == "__main__":
    check_alphanumeric("_!ab")
