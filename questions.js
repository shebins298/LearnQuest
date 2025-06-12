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
        "What will be the value of x after executing: int x = 10; x += 5;",
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
        "What will be the output of the following C++ code if the input is 'Computer Programming'?\n\nchar text[20];\ncin >> text;\ncout << text;",
      options: ["Computer Programming", "Computer", "Programming", "Error"],
      answer: "Computer",
    },
  ],
};
