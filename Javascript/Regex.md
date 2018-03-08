# Regular Expression

Regular expressions are used to search patterns in strings.

In Javascript Regular Expression or Regex are defined within

    /subesh/

Here `subesh` is a regular expression

## Terms in Regular Expressions

### 1. Flags

Flags determine the mode for the regular expression.

```javascript
let a = /the/gi;
```

* `g` - indicates global search meaning search the string for all possible matches. If not set returns first match.

* `i` - is set to indicate that the search mode is case insensitive.

* `m` - Perform multi-line matching

### 2. Character Sets

This is a way to match several different characters in a single positions.
It is done by using `[]`

Example:

```javascript
let exp = /[hp]ari/;
```

In the above example the Regex matches both `hari` and `pari`.
(Union Operation)

### 3. Exclude Sets

This is used to exclude certain sets of characters from a position.

Example:

```javascript
let exp = /[^hp]ari/;
```

Here, all the sequence of letter for `*ari` will match except for `h` and `p`.

### 4. Ranges

Typing in all possible letters in a sequence is prone to human errors. Regex provides a way to show the range between two characters through a set

Example:

```javascript
let a = /[a-z]/;
```

The above exp accepts any character from `a` to `z`. You can add multiple ranges in a set. These ranges must be valid.

### 5. Repeating Characters or Quantifiers

To match repeating characters we use `+` (positive closure) to
match any number of repetition. However, you can specify the number of times a character is repeated through `{low,high}` the high can be set empty.
Quantifiers specify how many instances of a character, group, or character class must be present in the input for a match to be found.

Example:

```javascript
let a = /[a]+ /; // Matches any number of a's
let b = /[a]{2} /; //Matches two consecutive a's
let c = /[a]{2,6} /; //Matches a's repeating between 2 to 6
let d = / [a]{2,}/; //Matches a's repeating two or more time.
```

**Note :** There can't be any spaces in between the `{}`.

Some of the quantifiers are:

* `n+` - Matches any string that contains at least one n
* `n*` - Matches any string that contains zero or more occurrences of n
* `n?` - Matches any string that contains zero or one occurrences of n
* `n{X}` - Matches any string that contains a sequence of X n's
* `n{X,Y}` - Matches any string that contains a sequence of X to Y n's
* `n{X,}` - Matches any string that contains a sequence of at least X n's
* `n$` - Matches any string with n at the end of it
* `^n` - Matches any string with n at the beginning of it
* `?=n` - Matches any string that is followed by a specific string n
* `?!n` - Matches any string that is not followed by a specific string n

### 6. MetaCharacters

A metacharacter is a character that has a special meaning during pattern processing. You use metacharacters in regular expressions to define the search criteria and any text manipulations.

Example:

```javascript
 let a = /\w/
 ```
Here the regexp matches a word character (a-z,A-Z and _)

Some of the meta characters are :

* `.` - Find a single character, except newline or line terminator
* `\w` - Find a word character
* `\W` - Find a non-word character
* `\d` - Find a digit
* `\D` - Find a non-digit character
* `\s` - Find a whitespace character
* `\S` - Find a non-whitespace character
* `\b` - Find a match at the beginning/end of a word
* `\B` - Find a match not at the beginning/end of a word
* `\0` - Find a NUL character
* `\n` - Find a new line character
* `\f` - Find a form feed character
* `\r` - Find a carriage return character
* `\t` - Find a tab character
* `\v` - Find a vertical tab character
* `\xxx` - Find the character specified by an octal number xxx
* `\xdd` - Find the character specified by a hexadecimal number dd
* `\uxxxx` - Find the Unicode character specified by a hexadecimal number xxxx
