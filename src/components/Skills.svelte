<script>
    export let skills = [
      { category: "Languages", items: ["JavaScript", "TypeScript", "Go", "Java"] },
      { category: "Frameworks", items: ["Svelte", "React", "Next.js", "NestJS"] },
      { category: "Databases", items: ["PostgreSQL", "MongoDB", "MySQL"] },
      { category: "Tools", items: ["Git", "Docker", "AWS", "WebSockets"] }
    ];
  </script>
  
  <style>
    .skills-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1rem;
      padding: 1.5rem;
    }
  
    .skill-category {
      background-color: #f9f9f9;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      border-radius: 8px;
      padding: 1rem;
      text-align: center;
      transition: transform 0.2s, box-shadow 0.2s;
    }
  
    .skill-category:hover {
      transform: translateY(-5px);
      box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
    }
  
    .category-title {
      font-size: 1.25rem;
      font-weight: bold;
      margin-bottom: 0.5rem;
      color: #333;
    }
  
    .skill-items {
      list-style: none;
      padding: 0;
      margin: 0;
    }
  
    .skill-items li {
      font-size: 0.95rem;
      margin: 0.25rem 0;
      color: #555;
    }
  </style>
  
  <div class="skills-container">
    {#each skills as skill}
      <div class="skill-category">
        <h3 class="category-title">{skill.category}</h3>
        <ul class="skill-items">
          {#each skill.items as item}
            <li>{item}</li>
          {/each}
        </ul>
      </div>
    {/each}
  </div>
  