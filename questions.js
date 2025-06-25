const cppQuestions = {
  "Chapter 1 - Review of C++ Programming": [
    {
      question: "The input operator in C++ is _________",
      options: ["<<", ">>", "cin", "get"],
      answer: ">>",
    },
    {
      question: "Which operator is an arithmetic assignment operator in C++?",
      options: ["==", "+=", "=", "++"],
      answer: "+=",
    },
    {
      question:
        "Which among the following is equivalent to the statement series b=a; a=a+1; ?",
      options: ["b += a", "b = a++", "b = ++a", "b += a + b"],
      answer: "b = a++",
    },

    {
      question:
        "A __________ statement in a loop forces the termination of that loop.",
      options: ["continue", "exit", "return", "break"],
      answer: "break",
    },
    {
      question: "Which of the following is an exit control loop in C++?",
      options: ["while", "for", "do while", "if"],
      answer: "do while",
    },
    {
      question: "Which among the following is an insertion operator in C++?",
      options: ["<<", ">>", "cin", "get"],
      answer: "<<",
    },

    {
      question: "Which among the following is not a valid identifier in C++?",
      options: ["total_sum", "123value", "_count", "marks"],
      answer: "123value",
    },
    {
      question: "Which data type is best suited to store a single character?",
      options: ["int", "char", "string", "float"],
      answer: "char",
    },

    {
      question:
        "What will be the value of x after executing:<br>int x = 10;<br>x+= 5;",
      options: ["5", "10", "15", "20"],
      answer: "15",
    },
    {
      question:
        "Which of the following is not a valid data type modifier in C++?",
      options: ["signed", "unsigned", "long", "fixed"],
      answer: "fixed",
    },
  ],

  "Chapter 2 - Arrays": [
    {
      question:
        "Accessing each element of an array at least once to perform any operation is known as __________ operation.",
      options: ["Insertion", "Traversal", "Sorting", "Searching"],
      answer: "Traversal",
    },
    {
      question: "Which character is stored at the end of a string in C++?",
      options: ["\\0", "\\n", "#", "/t"],
      answer: "\\0",
    },
    {
      question:
        "Which C++ statement declares an array to store a student's name with size 25?",
      options: [
        "character student[25];",
        "string name[25];",
        "char name[25];",
        "char name = 25;",
      ],
      answer: "char name[25];",
    },
    {
      question:
        "Which is the correct way to initialize an array MARK with values 70, 80, 85, 90?",
      options: [
        "int MARK = {70,80,85,90};",
        "int MARK[4] = {70,80,85,90};",
        "MARK[] = {70,80,85,90};",
        "int MARK[4];",
      ],
      answer: "int MARK[4] = {70,80,85,90};",
    },
    {
      question:
        "Which is the correct way to declare an integer array of size 10?",
      options: [
        "int num(10);",
        "int num[10];",
        "array num[10];",
        "int num = 10;",
      ],
      answer: "int num[10];",
    },
    {
      question: "How much space is allotted for char name[5]?",
      options: ["10 bytes", "20 bytes", "5 bytes", "1 byte"],
      answer: "5 bytes",
    },
    {
      question: "What is the space allotted for double num[10]?",
      options: ["10 bytes", "80 bytes", "40 bytes", "8 bytes"],
      answer: "80 bytes",
    },
    {
      question: "An array element is accessed using its _______.",
      options: ["Index value", "Address", "Length", "Pointer"],
      answer: "Index value",
    },
    {
      question:
        "Printing all the elements of an array is an example of ______ operation.",
      options: ["Sorting", "Traversal", "Searching", "Selection"],
      answer: "Traversal",
    },
    {
      question: "A string can be considered as an array of ________.",
      options: ["Integers", "Words", "Characters", "Floats"],
      answer: "Characters",
    },
    {
      question:
        "Which header file is required for gets() and puts() functions in C++?",
      options: ["iostream", "stdio.h", "cstdio", "string"],
      answer: "cstdio",
    },
    {
      question:
        "What will be the output of the following C++ code if the input is 'Computer Programming'?<br>char text[20];<br>cin>>text;<br>cout<<text;",
      options: ["Computer Programming", "Computer", "Programming", "Error"],
      answer: "Computer",
    },
  ],

  "Chapter 3 - Functions": [
    {
      question:
        "Name the mathematical function which returns the absolute value of an integer number.",
      options: ["abs()", "sqrt()", "pow()", "floor()"],
      answer: "abs()",
    },
    {
      question:
        "The process of breaking a large program into smaller sub‑programs is called ________.",
      options: ["Compilation", "Modularization", "Iteration", "Recursion"],
      answer: "Modularization",
    },
    {
      question:
        "Which built‑in C++ function converts a given character into lowercase?",
      options: ["toUpper()", "tolower()", "strlwr()", "casefold()"],
      answer: "tolower()",
    },
    {
      question:
        "Which built‑in function is used to check whether a character is alphanumeric?",
      options: ["isalpha()", "isdigit()", "isalnum()", "ispunct()"],
      answer: "isalnum()",
    },
    {
      question: "Which function converts –25 to 25?",
      options: ["fabs()", "abs()", "ceil()", "round()"],
      answer: "abs()",
    },
    {
      question:
        "Which function compares “computer” and “COMPUTER” ignoring case?",
      options: ["strcmp()", "strcasecmp()", "strcmpi()", "strncmp()"],
      answer: "strcmpi()",
    },
    {
      question: "Which function checks whether the given character is a digit?",
      options: ["isalpha()", "isdigit()", "isnumber()", "isnum()"],
      answer: "isdigit()",
    },
    {
      question: "Which function converts the character 'B' to 'b'?",
      options: ["toupper()", "toLower()", "tolower()", "caselow()"],
      answer: "tolower()",
    },
    {
      question: "Which function returns the square root of 64 (or any number)?",
      options: ["sqrt()", "pow()", "cbrt()", "root()"],
      answer: "sqrt()",
    },
    {
      question:
        "Which header file is required to use built-in functions like abs(), sqrt(), and pow() in modern C++?",
      options: ["<string>", "<cmath>", "<cctype>", "<stdio.h>"],
      answer: "<cmath>",
    },
    {
      question:
        'What will be the output of the following C++ code?<br>char s1[10] = "hello", s2[10];<br>strcpy(s2, s1);<br>cout << s2;',
      options: ["hello", "s1", "s2", "error"],
      answer: "hello",
    },

    {
      question:
        'Consider the following C++ code:<br><br>char s1[] = "program";<br>char s2[] = "PROGRAM";<br>int n;<br>n = strcmpi(s1, s2);<br><br>What is the value of n?',
      options: ["n = 0", "n = 1", "n > 1", "n < 0"],
      answer: "n = 0",
    },
  ],
};
