<script lang="ts">
  import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
  import { faGithub, faInstagram, faLinkedinIn, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
  import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

  export let y: number;

  const socialLinks = [
    { icon: faGithub, link: "https://github.com/Riteek712", label: "GitHub" },
    { icon: faLinkedinIn, link: "https://www.linkedin.com/in/riteek-rakesh-459299208", label: "LinkedIn" },
    { icon: faXTwitter, link: "https://x.com/RiteekRakesh", label: "Twitter" },
    { icon: faEnvelope, link: "mailto:riteek7.12@gmail.com", label: "Email" }
  ];

  let tabs = [
    { name: 'Work', link: '#WorkEX' },
    { name: 'Projects', link: '#projects' },
    // Add more tabs as needed
  ];

  function openCV() {
    window.open(
      "https://drive.google.com/file/d/1c-ySQQsDxWTArKELSfcdXl_WBDzXOV9r/view",
      "_blank"
    );
  }
</script>

<style>
   header {
    /* Bulb effect background */
    background: linear-gradient(to bottom, rgba(18, 1, 43, 0.9) 20%, rgba(255, 255, 255, 0.1) 90%);
    /* box-shadow: 0 0 20px rgba(255, 255, 255, 0.5), inset 0 0 10px rgba(255, 255, 255, 0.5); */
    transition: background 0.3s ease, box-shadow 0.3s ease;
  }
  .social-icon {
    margin: 0 15px; /* Adjust spacing between icons */
    font-size: 32px; /* Adjust size of the icons */
    color: #000; /* Default icon color */
    transition: color 0.3s;
  }

  .social-icon:hover {
    color: #0073e6; /* Change color on hover */
  }

  .social-icons {
    display: flex; /* Ensure icons are displayed inline */
    align-items: center; /* Center icons vertically */
  }
</style>

<header class={"sticky z-[101] top-0 duration-200 px-6 flex items-center justify-between border border-solid" + (y > 0 ? " py-4 bg-slate-950" : " py-6 bg-transparent border-transparent")}>
  <button on:click={openCV} id="cv-button" class="font-bold">
    <b class="hover:underline underline-offset-8" style="font-family: 'Rock Salt', cursive;">CV</b>
  </button>

  <div class="sm:flex items-start gap-10 hidden">
    {#each tabs as tab}
      <a href={tab.link} class="duration-200 hover:text-violet-400">
        <p>{tab.name}</p>
      </a>
    {/each}
  </div>

  <div class="social-icons items-center gap-10">
    {#each socialLinks as { icon, link, label }}
      <a href={link} target="_blank" rel="noopener noreferrer" aria-label={label} data-hover-tooltip={label} data-tooltip-position="bottom">
        <FontAwesomeIcon icon={icon} class="social-icon fa-xl" />
      </a>
    {/each}
  </div>
</header>
