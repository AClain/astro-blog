---
layout: "@/layouts/PostLayout.astro"
title: "How to Use Git?"
description: "This is the first tutorial on how to use Git."
author: "Romain Mularczyk"
topic: "Git"
tags: ["git", "learn", "introduction"]
published_at: 2024-12-02
next: "learn-git-advanced"
---

# Eigenvalues and eigenvectors

# Definition

Given a vector $\vec{u}$ such that $\vec{u} \neq \vec{0}$ and a number $\lambda \in \mathbb{R}$ that verifies the following equation :

$$
f(\vec{u}) = \lambda \vec{u}
$$

Then, the vector $\vec{u}$ is an eigenvector and $\lambda$ is an eigenvalue. Let’s remind that an **eigenvector is never the null-vector**. An **eigenvector has only one eigenvalue**.

If we write the previous equality using a **matrix notation** (if we have $A$ a given matrix $\mathbb{R}_{m \times n}$) :

$$
Ax = \lambda x
$$

If we try to think in more concrete terms, looking at eigenvectors and eigenvalues is looking about **what changes and what does not change** when applying a transformation with a matrix. Looking for eigenvectors is looking for **vectors that do not change when we multiply by** $A$.

In the equation above, $x$ is our **eigenvector** and $\lambda$ is our **eigenvalue**. Let’s look at some special cases to build our understanding :

- $\lambda = 2$, this means that the vector $x$ is scaled twice as big when multiplied by $A$
- $\lambda = -1$, the direction of the vector $x$ is reversed when multiplied by $A$
- $\lambda = 0$, this means that $Ax = 0$ so the eigenvector $x$ is actually the nullspace
- $A = I$, every vector has $Ax = x$ (which means that all vectors are eigenvectors of $I$)

Most $2 \times 2$ matrices have two eigenvectors directions and two eigenvalues.

Any vector of a matrix is a linear combination of its eigenvectors. This means that ones we found the eigenvectors of a matrix, we can express any vectors of that matrix through a linear combination of its eigenvectors.

# Charateristic polynomial

The steps to find the eigenvalues and eigenvectors revolve around build the **characteristic polynomial** out of our matrix. Let’s walk through these steps. We start we our first equation :

$$
\begin{align}
Ax &= \lambda x \\
Ax - \lambda x &= 0 \\
(A - \lambda I)x &= 0
\end{align}
$$

If we recall the rule in [Determinant](https://www.notion.so/Determinant-2bd6bbca9c5e8069ad56f2f2086a1cfe?pvs=21), we know that if $A - \lambda I$ has a non-zero solution, this means that $A - \lambda I$ is not invertible. This also means that :

$$
\det(A - \lambda I) = 0
$$

The equation above is the one we use to find **eigenvalues**.

$$
\begin{align}
A - \lambda I &= \begin{bmatrix}
a & b \\
c & d \\
\end{bmatrix} - \lambda I \\
&= \begin{bmatrix}
a - \lambda & b \\
c & d - \lambda \\
\end{bmatrix}
\end{align}
$$

Now we can compute the determinant of $A - \lambda I$ :

$$
\begin{align}
\det\big(A - \lambda I \big) &= (a - \lambda)(d - \lambda) - cb \\
&= \lambda^2 - ad \lambda + ad - cb
\end{align}
$$

The polynomial we found is the **characteristic polynomial**. We can now simply apply the rules from calculus in order to find the roots of second degree polynomials. This means we need to compute the **discriminant**.

## Example

Let’s say we have $A$ :

$$
A = \begin{bmatrix}
1 & 2 \\
2 & 4 \\
\end{bmatrix}
$$

We first define our characteristic polynomial :

$$
\begin{align}
A - \lambda I &= \begin{bmatrix}
1 - \lambda & 2 \\
2 & 4 - \lambda \\
\end{bmatrix}
\end{align}
$$

Then we compute the determinant of $A - \lambda I$ :

$$
\begin{align}
\det(A - \lambda I) &= 0 \\
(1 - \lambda)(4 - \lambda) - 2 \times 2 &= 0 \\
\lambda^2 + 4 - 5\lambda - 4 &= 0 \\
\lambda^2 - 5\lambda &= 0 \\
\end{align}
$$

From now, we could either factor our polynomial or apply the discriminant rule. Let’s go with factoring first :

$$
\begin{align}
\lambda^2 - 5\lambda &= 0 \\
\lambda(\lambda - 5) &= 0 \\
\end{align}
$$

We have our two roots :

- $\lambda_{1} = 0$
- $\lambda_{2} = 5$

Now let’s work the same solution using the **discriminant** as a refresher (remember that $\Delta = b^2 - 4ac$) :

$$
\Delta = (-5)^2 - 4 \times 1 \times 0 = 25
$$

Then, we know that the first root is defined by :

$$
\begin{align}
\lambda_{1} &= \frac{-b + \sqrt{\Delta}}{2a} \\
&= \frac{5 + \sqrt{25}}{2} \\
&= \frac{10}{2} \\
&= 5 \\
\end{align}
$$

The second root is defined by :

$$
\begin{align}
\lambda_2 &= \frac{-b - \sqrt{\Delta}}{2a} \\
&= \frac{5 -\sqrt{25}}{2} \\
&= \frac{0}{2} \\
&= 0 \\
\end{align}
$$

Once we found the eigenvalues, we need to compute the eigenvectors. For that, we solve the equation $(A - \lambda I)x = 0$ for both $\lambda_1$ and $\lambda_2$.

Let’s start with $\lambda_1$ :

$$
\begin{align}
(A - \lambda_1 I)x &= 0 \\
(A - 0)x &= 0 \\
\begin{bmatrix}
1 & 2 \\
2 & 4 \\
\end{bmatrix}x &= \begin{bmatrix}
0 \\
0 \\
\end{bmatrix}
\end{align}
$$

Here, we found our first eigenvector, $x_{1} = \begin{bmatrix}
2 \\
-1 \\
\end{bmatrix}$. We could go through gaussian elimination to find the result (which we need to in more complicated cases), but here we can simply notice that taking two times the first column would cancel out if subtracted with the second column.

Let’s move to $\lambda_2 :$

$$
\begin{align}
(A - \lambda_2 I)x &= 0 \\
\Bigg(\begin{bmatrix}
1 & 2 \\
2 & 4 \\
\end{bmatrix} - \begin{bmatrix}
5 & 0 \\
0 & 5 \\
\end{bmatrix}\Bigg)x &= \begin{bmatrix}
0 \\
0 \\
\end{bmatrix} \\
\begin{bmatrix}
-4 & 2 \\
2 & -1 \\
\end{bmatrix}x &=
\begin{bmatrix}
0 \\
0 \\
\end{bmatrix} \\
\end{align}
$$

Same thing as before, here we can see that the second eigenvector, $x_2 = \begin{bmatrix}
1 \\
2 \\
\end{bmatrix}$.

# Diagonalization
