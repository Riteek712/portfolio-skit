<script lang="ts">
    export let classname = '';
    export let href = '';
    export let iconname = '';
    export let title = '';
    export let description = '';
    export let tags: string[] =[];
  </script>
  
  <div class="card-container">
    <div class={`card ${classname}`}>
      <a href={href}>
        <div class="card--display">
          <i class="{iconname} text-violet-200"/>
          <h2 class="font-bolder text-2xl">{title}</h2>
          <ul class="flex flex-wrap gap-2 mt-1 justify-center">
            {#each tags as tag}
              <li class="bg-gray-800 px-2 py-1 rounded">{tag}</li>
            {/each}
          </ul>
        </div>
        <div class="card--hover">
          <!-- <h2>{title}</h2> -->
          <p>{description}</p>
          <p class="link font-semibold text-xl"  ><b>Click to see project code.</b></p>
        </div>
      </a>
      <div class="card--border"></div>
    </div>
  </div>
  
<style>
    :global(body) {
      /* padding: 50px; */
      display: flex;
      flex-flow: wrap;
      /* font-family: "Ubuntu", sans-serif; */
    }
  
    :global(body) * {
      box-sizing: border-box;
    }
  
    .card-container {
      flex: 1 1 300px;
      margin: 30px;
      width: 80%;
    }
  
    .card {
      font-weight: bold;
      position: relative;
      width: 100%;
      box-shadow: 0 10px 10px rgba(139, 92, 246, 0.25); 
    
    }
    .card h2{
      font-family: "Michroma", sans-serif;
      color:rgb(139 92 246 / var(--tw-text-opacity));
    }
  
    .card a {
      padding: 30px;
      width: 100%;
      border: 2px solid black;
      background: rgba(0, 0, 0, 0.822);
      /* border-radius: 20px; */
      text-decoration: none;
      color: #ffffff;
      display: block;
      transition: 0.25s ease;
      box-shadow: 0 10px 20px rgba(139, 92, 246, 0.5); 
    }
  
    .card a:hover {
      transform: translate(0, -20px);
      border-color: #ffffff;
      background-color: #8b5cf6;
      box-shadow: 0 15px 30px rgba(139, 92, 246, 0.75); 
      transition-duration: 600ms
    }
  
    .card a:hover .card--display {
      display: none;
    }
  
    .card a:hover .card--hover {
      display: block;
    }
  
    .card--display {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
  
    .card--display i {
      font-size: 60px;
      margin-top: 20px;
    }
  
    .card--display h2 {
      margin: 20px 0 10px;
    }
  
    .card--display .card--description {
      display: none;
    }
  
    .card--hover {
      display: none;
      text-align: left;
      border: 3px double #8b5cf6;

    }
  
    .card--hover h2 {
      margin: 20px 0;
    }
  
    .card--hover p {
      font-weight: normal;
      line-height: 1.5;
    }
  
    .card--hover p.link {
      margin: 20px 0 0;
      font-weight: bolder;
      color: #ffc2c2;
    }
  
    .card--border {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      border: 3px double #8b5cf6;
      /* border-radius: 20px; */
      z-index: -1;
    }
  
    .card--dark a {
      color: white;
      background-color: black;
      border-color: black;
      /* border-radius: 20px; */
    }
  
    .card--dark .card--hover .link {
      color: #fde74c;
    }
  
    /* Responsive Styles */
    @media (max-width: 1200px) {
      .card-container {
        flex: 1 1 45%;
      }
    }
  
    @media (max-width: 768px) {
      .card-container {
        flex: 1 1 100%;
        margin: 15px 0;
      }
  
      .card a {
        padding: 20px;
      }
  
      .card--display i {
        font-size: 50px;
        margin-top: 10px;
      }
  
      .card--hover p.link {
        margin: 10px 0 0;
      }
    }
  </style>