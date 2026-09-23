# What Is Python?

Python is a high-level, general-purpose programming language. It is popular because its syntax is readable, it has a large collection of libraries, and it can be used for web development, automation, artificial intelligence, machine learning, and data analytics.

Python is an interpreted language. In normal use, a Python interpreter reads and runs Python code. Python is also dynamically typed, which means a variable does not need a declared data type before it is used.

Example:

```python
sales = 25000
region = "North"
print(region, sales)
```

## Why Python Is Used in Data Analytics

Python helps analysts collect, clean, transform, analyze, visualize, and automate data. It can work with small spreadsheets as well as large datasets connected to databases and cloud systems.

Important advantages include:

1. Easy-to-read syntax for beginners and professionals.
2. Powerful libraries for data analysis and visualization.
3. Support for CSV, Excel, JSON, XML, SQL databases, and APIs.
4. Ability to automate repetitive data-processing tasks.
5. Strong statistical, machine learning, and scientific computing support.
6. Integration with Jupyter Notebook, Excel, Power BI, databases, and cloud platforms.
7. A large community that provides documentation, tutorials, and reusable packages.

## Important Python Terms

- **Program:** A set of instructions written to solve a problem.
- **Script:** A Python file, usually with a `.py` extension, that contains executable code.
- **Interpreter:** Software that runs Python code.
- **Variable:** A name that refers to a value.
- **Data type:** The kind of value stored, such as text, integer, or list.
- **Function:** A reusable block of code that performs a task.
- **Module:** A Python file containing reusable code.
- **Package:** A collection of related modules.
- **Library:** A collection of reusable code that provides useful functionality.
- **Object:** A value in Python that has a type, data, and available operations.
- **Exception:** An error event that can be handled by a program.
- **Jupyter Notebook:** An interactive environment that combines code, output, charts, and explanations.

## Basic Rules of Python

### 1. Python Is Case-Sensitive

Uppercase and lowercase letters are different.

```python
sales = 100
Sales = 200

print(sales)  # 100
print(Sales)  # 200
```

Use consistent lowercase names for variables and functions.

### 2. Indentation Is Required

Python uses indentation to define blocks of code. Four spaces are the usual standard. Do not mix tabs and spaces in the same block.

```python
if sales > 0:
	print("Sales are available")
```

Incorrect indentation causes an `IndentationError` or changes the meaning of the program.

### 3. Colons Start Code Blocks

A colon is used after statements such as `if`, `for`, `while`, function definitions, classes, and exception handlers.

```python
for value in [10, 20, 30]:
	print(value)
```

### 4. Statements Usually End at the Newline

Python normally does not require a semicolon at the end of a statement.

```python
name = "Mansi"
print(name)
```

Multiple statements can be placed on one line with semicolons, but separate lines are clearer and preferred.

### 5. Use Comments to Explain Code

Use `#` for a short comment and triple-quoted strings for documentation strings.

```python
# Calculate total revenue
total_revenue = price * quantity
```

Comments should explain a decision or an important assumption rather than repeat obvious code.

### 6. Use Valid Identifiers

Variable, function, and class names must follow these rules:

- They may contain letters, numbers, and underscores.
- They cannot start with a number.
- They cannot contain spaces or most special characters.
- They cannot be Python keywords such as `if`, `for`, `class`, or `return`.
- They should describe the value or purpose clearly.

Good examples:

```python
customer_count = 150
average_order_value = 725.50
```

Use `snake_case` for variables and functions, `PascalCase` for classes, and uppercase names for constants such as `TAX_RATE`.

### 7. Assign Values with the Equals Sign

The single equals sign assigns a value. Double equals compares values.

```python
target = 100       # assignment
is_target = target == 100  # comparison
```

### 8. Use Correct Data Types

Common built-in data types include:

| Data type | Example | Use |
|---|---|---|
| `int` | `25` | Whole numbers |
| `float` | `25.75` | Decimal numbers |
| `str` | `"Delhi"` | Text |
| `bool` | `True` | True or false values |
| `list` | `[10, 20, 30]` | Ordered, changeable collection |
| `tuple` | `(10, 20, 30)` | Ordered, generally unchangeable collection |
| `set` | `{10, 20, 30}` | Collection of unique values |
| `dict` | `{"city": "Delhi"}` | Key-value data |
| `None` | `None` | Missing or intentionally empty value |

Check a value's type with `type()` and convert values with functions such as `int()`, `float()`, `str()`, and `bool()`.

### 9. Use Operators Correctly

- Arithmetic: `+`, `-`, `*`, `/`, `//`, `%`, `**`
- Comparison: `==`, `!=`, `>`, `<`, `>=`, `<=`
- Logical: `and`, `or`, `not`
- Membership: `in`, `not in`
- Identity: `is`, `is not`

Use `==` to compare values. Use `is` mainly to check identity, especially with `None`.

### 10. Use Control Flow for Decisions and Repetition

Use `if`, `elif`, and `else` for decisions. Use `for` to iterate over items and `while` to repeat while a condition remains true.

```python
if revenue >= target:
	status = "Target achieved"
else:
	status = "Below target"
```

Use `break` to stop a loop, `continue` to skip to the next iteration, and `pass` as a temporary empty statement.

### 11. Define Reusable Functions

Functions reduce repetition and make code easier to test.

```python
def calculate_total(price, quantity):
	return price * quantity

total = calculate_total(500, 3)
```

Use clear parameter names and return a value when the calling code needs a result.

### 12. Handle Errors with Exceptions

Use `try` and `except` when an expected operation can fail. Avoid hiding every error with a broad, empty exception handler.

```python
try:
	quantity = int(user_input)
except ValueError:
	print("Quantity must be a whole number")
```

Use `finally` for cleanup that must happen whether an operation succeeds or fails.

### 13. Import Libraries Explicitly

Use `import` to access modules and libraries.

```python
import pandas as pd

sales_data = pd.read_csv("sales.csv")
```

Import only what is needed, use recognized aliases, and avoid wildcard imports such as `from module import *` because they make code harder to understand.

### 14. Keep Code Readable

Follow PEP 8, the main style guide for Python. Use meaningful names, consistent indentation, short focused functions, sensible line lengths, and blank lines to separate logical sections.

Readable code is especially important in analytics because another person must be able to check the calculations and assumptions.

## Important Python Libraries for Data Analytics

### 1. NumPy

NumPy provides fast arrays and mathematical operations. It is useful for numerical calculations and is used internally by many analytics libraries.

```python
import numpy as np

values = np.array([10, 20, 30])
average = np.mean(values)
```

### 2. Pandas

Pandas provides `Series` and `DataFrame` objects for tabular data. It is commonly used for loading, cleaning, filtering, grouping, joining, and summarizing datasets.

```python
import pandas as pd

sales = pd.read_csv("sales.csv")
sales["revenue"] = sales["price"] * sales["quantity"]
summary = sales.groupby("region")["revenue"].sum()
```

### 3. Matplotlib

Matplotlib creates charts such as line charts, bar charts, scatter plots, and histograms.

### 4. Seaborn

Seaborn builds statistical charts with a convenient interface and attractive defaults. It works well with Pandas DataFrames.

### 5. Plotly

Plotly creates interactive charts that allow users to hover, zoom, and filter visual information.

### 6. SciPy

SciPy provides scientific and statistical functions for advanced analysis.

### 7. Scikit-learn

Scikit-learn provides tools for machine learning, preprocessing, model evaluation, classification, regression, and clustering.

### 8. SQLAlchemy and Database Drivers

These tools help Python connect to relational databases and retrieve data using SQL.

### 9. Requests

Requests sends HTTP requests and is commonly used to collect data from APIs. Always follow the API's authentication, rate-limit, and usage rules.

## Python Workflow in Data Analytics

### Step 1: Define the Business Question

Clarify what decision the analysis should support. For example: Which regions had the largest decline in monthly revenue?

### Step 2: Collect the Data

Load data from CSV files, Excel workbooks, SQL databases, APIs, or other approved sources.

```python
sales = pd.read_excel("monthly_sales.xlsx")
```

### Step 3: Inspect the Data

Check columns, data types, row counts, missing values, and duplicate records.

```python
sales.head()
sales.info()
sales.isna().sum()
```

### Step 4: Clean the Data

Correct data types, remove duplicates, handle missing values, standardize text, and check outliers. Do not delete unusual values without understanding whether they are errors or meaningful events.

```python
sales = sales.drop_duplicates()
sales["order_date"] = pd.to_datetime(sales["order_date"])
```

### Step 5: Transform and Analyze

Create calculated columns, filter records, join related tables, group data, and calculate totals or averages.

```python
regional_sales = (
	sales.groupby("region", as_index=False)["revenue"]
	.sum()
	.sort_values("revenue", ascending=False)
)
```

### Step 6: Visualize the Results

Select a chart based on the question. Use line charts for trends, bar charts for comparisons, scatter plots for relationships, and histograms for distributions.

```python
import matplotlib.pyplot as plt

regional_sales.plot(kind="bar", x="region", y="revenue")
plt.title("Revenue by Region")
plt.tight_layout()
plt.show()
```

### Step 7: Interpret and Communicate

Explain what happened, why it may have happened, and what action the business could take. Include assumptions, limitations, and the date on which the data was collected.

### Step 8: Validate and Share

Check totals against the original source, review code and charts, save the cleaned output, and share the notebook, report, dashboard, or automated pipeline with appropriate access controls.

## Rules for Good Python Analytics Code

1. Start with a clear business question.
2. Keep raw data unchanged and create a separate cleaned dataset.
3. Record data sources, assumptions, filters, and transformations.
4. Inspect data before calculating results.
5. Use functions to avoid repeating cleaning and analysis logic.
6. Validate totals and sample records after every major transformation.
7. Use descriptive variable and column names.
8. Avoid hard-coding values that may change; use configuration variables instead.
9. Do not expose passwords, API keys, or private customer information in notebooks or source code.
10. Use virtual environments so project dependencies remain isolated.
11. Keep package versions documented for reproducibility.
12. Use version control such as Git for important scripts and notebooks.
13. Write tests for reusable calculations and data transformations.
14. Explain unexpected results rather than silently removing them.
15. Make charts readable, labeled, and relevant to the question.

## Python and Other Analytics Tools

| Tool | Main use |
|---|---|
| Python | Automation, data cleaning, analysis, statistics, and machine learning |
| Excel | Spreadsheet calculations, quick analysis, and business reporting |
| SQL | Querying and transforming data in relational databases |
| Power BI | Interactive dashboards and business intelligence reporting |
| Tableau | Visual analytics and dashboard creation |
| R | Statistics, research, and data visualization |

These tools are complementary. An analyst may use SQL to extract data, Python to clean and analyze it, and Power BI to publish the final dashboard.

## Advantages and Limitations of Python in Analytics

### Advantages

- Free and open source.
- Easy to automate and repeat.
- Supports many data formats and systems.
- Has a large analytics and machine learning ecosystem.
- Works well with notebooks, dashboards, APIs, and databases.

### Limitations

- Large datasets may require memory-efficient techniques or distributed tools.
- Package and environment management can confuse beginners.
- Poorly written code can produce incorrect results even when it runs successfully.
- Python is not always the fastest choice for low-level or real-time applications.
- Statistical results still require domain knowledge and careful interpretation.

## Conclusion

Python is a readable and flexible programming language that supports the complete data analytics process. Its rules include correct indentation, valid names, proper data types, clear control flow, reusable functions, exception handling, and readable style. In data analytics, Python is most valuable when it is combined with sound business questions, reliable data preparation, validated calculations, meaningful visualizations, and clearly communicated recommendations.

## Short Answer

Python is a general-purpose programming language used in data analytics to collect, clean, transform, analyze, visualize, and automate data. Its main rules include case sensitivity, indentation, correct syntax, meaningful names, proper data types, reusable functions, error handling, and readable code.
