// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Header scroll effect
    const nav = document.querySelector(".main-nav")
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        nav.classList.add("scrolled")
      } else {
        nav.classList.remove("scrolled")
      }
    })
  
    // Mobile menu toggle
    const navToggle = document.getElementById("navToggle")
    const navLinks = document.getElementById("navLinks")
  
    navToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active")
      document.body.classList.toggle("menu-open")
    })
  
    // Close menu when clicking outside
    document.addEventListener("click", (event) => {
      if (
        !navLinks.contains(event.target) &&
        !navToggle.contains(event.target) &&
        navLinks.classList.contains("active")
      ) {
        navLinks.classList.remove("active")
        document.body.classList.remove("menu-open")
      }
    })
  
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
  
        if (navLinks.classList.contains("active")) {
          navLinks.classList.remove("active")
          document.body.classList.remove("menu-open")
        }
  
        const targetId = this.getAttribute("href")
        if (targetId === "#") return
  
        const targetElement = document.querySelector(targetId)
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: "smooth",
          })
        }
      })
    })
  
    // Active menu item on scroll
    const sections = document.querySelectorAll("section[id]")
    window.addEventListener("scroll", () => {
      let current = ""
      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.clientHeight
        if (pageYOffset >= sectionTop - 200) {
          current = section.getAttribute("id")
        }
      })
  
      document.querySelectorAll(".nav-links li a").forEach((a) => {
        a.classList.remove("active")
        if (a.getAttribute("href") === "#" + current) {
          a.classList.add("active")
        }
      })
    })
  
    // Cookie consent
    const cookieConsent = document.getElementById("cookieConsent")
    const acceptCookies = document.getElementById("acceptCookies")
  
    // Check if user has already accepted cookies
    if (!localStorage.getItem("cookiesAccepted")) {
      // Show the cookie consent banner with a slight delay
      setTimeout(() => {
        cookieConsent.classList.add("show")
      }, 1000)
    }
  
    // Handle accept button click
    acceptCookies.addEventListener("click", () => {
      localStorage.setItem("cookiesAccepted", "true")
      cookieConsent.classList.remove("show")
    })
  
    // Animation on scroll
    const animateOnScroll = () => {
      const elements = document.querySelectorAll(
        ".destination-card, .tour-card, .testimonial-card, .gallery-item, .feature-item",
      )
  
      elements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top
        const windowHeight = window.innerHeight
  
        if (elementPosition < windowHeight - 100) {
          element.classList.add("animate")
        }
      })
    }
  
    // Run animation on scroll
    window.addEventListener("scroll", animateOnScroll)
    // Run once on load
    animateOnScroll()
  })
  
  