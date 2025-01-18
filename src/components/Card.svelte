<script lang="ts">
    export let classname = '';
    export let href = '';
    export let iconname = '';
    export let title = '';
    export let description = '';
    export let tags: string[] = [];
  </script>
  
  <div class="card-container">
    <div class={`card ${classname}`}>
      <section>
        <div class="card--display">
          <i class={iconname + " text-violet-200"} />
          <h2 class="font-bolder text-2xl">{title}</h2>
          <ul class="flex flex-wrap gap-2 mt-1 justify-center">
            {#each tags as tag}
              <li class="bg-gray-800 px-2 py-1 rounded text-sm">{tag}</li>
            {/each}
          </ul>
        </div>
        <div class="card--hover">
          <p>{description}</p>
          <p class="link">
            <a href={href} class="project-link">
              <b>Click to see project code.</b>
            </a>
          </p>
        </div>
      </section>
      <div class="card--border"></div>
    </div>
  </div>
  
  <style>
    .card-container {
      width: 100%;
      padding: 1rem;
    }
  
    @media (min-width: 640px) {
      .card-container {
        width: calc(100% - 2rem);
        max-width: 500px;
        margin: 1rem;
      }
    }
  
    .card {
      font-weight: bold;
      position: relative;
      width: 100%;
      height: 100%;
      background: transparent;
    }
  
    .card h2 {
      font-family: "Michroma", sans-serif;
      color: rgb(139 92 246 / var(--tw-text-opacity));
    }
  
    .card section {
      position: relative;
      width: 100%;
      height: 100%;
      padding: 1.5rem;
      border: 2px solid black;
      background: rgba(0, 0, 0, 0.822);
      color: #ffffff;
      transition: all 0.25s ease;
    }
  
    .card section:hover {
      transform: translateY(-10px);
      border-color: #ffffff;
      background-color: #8b5cf6;
      box-shadow: 0 15px 30px rgba(139, 92, 246, 0.75);
    }
  
    .card section:hover .card--display {
      display: none;
    }
  
    .card section:hover .card--hover {
      display: block;
    }
  
    .card--display {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 1rem;
    }
  
    .card--display i {
      font-size: clamp(2.5rem, 5vw, 3.75rem);
      margin-top: 0.5rem;
    }
  
    .card--hover {
      display: none;
      text-align: left;
      border: 3px double #8b5cf6;
      padding: 1rem;
    }
  
    .card--hover p {
      font-weight: normal;
      line-height: 1.5;
    }
  
    .card--hover p.link {
      margin-top: 1rem;
      font-weight: 600;
    }
  
    .card--hover p.link a {
      color: #ffc2c2;
      text-decoration: underline;
      text-underline-offset: 8px;
      letter-spacing: 0.2ch;
      transition: color 0.2s ease;
    }
  
    .card--hover p.link a:hover {
      color: #ffffff;
    }
  
    .card--border {
      position: absolute;
      inset: 0;
      z-index: -1;
    }
  
    @media (max-width: 768px) {
      .card-container {
        padding: 0.75rem;
      }
  
      .card section {
        padding: 1.25rem;
      }
    }
  </style>