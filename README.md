# TypeScript Pro  
**A 4‑Hour Deep Dive from Basics to Expert Level**  
by **HuXn WebDev** – *uploaded 22 Nov 2023*  
<https://www.youtube.com/watch?v=zeCDuo74uzA&ab_channel=HuXnWebDev>

---

**Description**  
This repository contains beginner to expert-level TypeScript concepts.  
Each concept is placed in its own folder and includes:

- At least one `index.ts` file with runnable code  
- A `README.md` with a detailed explanation of the concept  

Simply open any folder in your code editor and run the `.ts` file with `ts-node` to explore the concept in action.

---

<details>
<summary><strong>Concepts Covered</strong></summary>

- Annotations  
- The **`any`** type  
- Array types  
- Multi‑dimensional arrays  
- Default‑parameter values  
- Enums  
- Function‑parameter annotations  
- Function‑return annotations  
- Generics  
- Interfaces  
- Intersection types  
- Literal types  
- Objects  
- OOP / Classes  
- Optional properties  
- Read‑only properties  
- Tuples  
- Type aliases  
- Type inference  
- Type narrowing  
- Union types  
- The **`never`** keyword  
- Void functions  

</details>

---

## Getting Started

```bash
# 1 – Clone the repo
git clone https://github.com/<your‑user>/typescript-concepts-playground.git
cd typescript-concepts-playground

# 2 – Install dev deps
npm install   # or yarn

# 3 – Run any concept file with ts‑node
npx ts-node src/<concept>/index.ts

# Example
npx ts-node src/generics/index.ts
