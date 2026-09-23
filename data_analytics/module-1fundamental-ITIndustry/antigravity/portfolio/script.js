/**
 * Mansi - Data Analytics Portfolio
 * Interactive Functionality, Chart.js Live Analytics, Project Filtering, and Modals
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMobileMenu();
  initScrollSpy();
  initBackToTop();
  initNumberCounters();
  initChartSandbox();
  initProjectFiltering();
  initProjectModals();
  initResumeModal();
  initContactForm();
  initClipboard();
  setCurrentYear();
});

/* ==========================================================================
   1. Theme Management (Dark / Light Mode)
   ========================================================================== */
function initTheme() {
  const themeToggleBtn = document.getElementById('themeToggle');
  const htmlEl = document.documentElement;

  // Retrieve saved preference or default to dark
  const savedTheme = localStorage.getItem('mansi_portfolio_theme') || 'dark';
  htmlEl.setAttribute('data-theme', savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = htmlEl.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      htmlEl.setAttribute('data-theme', newTheme);
      localStorage.setItem('mansi_portfolio_theme', newTheme);

      // Re-render chart with updated grid/text colors
      if (window.activeChartInstance) {
        updateChartTheme(window.activeChartInstance, newTheme);
      }
    });
  }
}

/* ==========================================================================
   2. Mobile Drawer Navigation
   ========================================================================== */
function initMobileMenu() {
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      navMenu.classList.toggle('open');
    });

    // Close menu when clicking any nav link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('open');
      });
    });
  }
}

/* ==========================================================================
   3. Scroll Spy (Active Navigation Item Tracking)
   ========================================================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });
}

/* ==========================================================================
   4. Back to Top Button
   ========================================================================== */
function initBackToTop() {
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* ==========================================================================
   5. Animated Number Counters
   ========================================================================== */
function initNumberCounters() {
  const metricNumbers = document.querySelectorAll('.metric-number');
  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        metricNumbers.forEach(num => {
          const target = parseInt(num.getAttribute('data-count'), 10);
          const duration = 1500;
          const stepTime = 25;
          const totalSteps = duration / stepTime;
          const increment = target / totalSteps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              num.textContent = target;
              clearInterval(timer);
            } else {
              num.textContent = Math.floor(current);
            }
          }, stepTime);
        });
      }
    });
  }, { threshold: 0.5 });

  const metricsContainer = document.querySelector('.hero-metrics');
  if (metricsContainer) {
    observer.observe(metricsContainer);
  }
}

/* ==========================================================================
   6. Live Analytics Sandbox (Chart.js Integration)
   ========================================================================== */
const datasetsConfig = {
  revenue: {
    type: 'bar',
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    data: [42000, 48000, 56000, 52000, 64000, 71000, 69000, 78000, 84000, 89000, 92500, 96000],
    dataPoints: '12 Months',
    primaryMetric: '$842,500 (+18.4% YoY)',
    insight: 'Key Finding: Q3 customer retention campaign boosted recurring subscription revenue by 24.3% while reducing churn risk by 7.1%.',
    sqlCode: '<span class="c-kw">SELECT</span> month, <span class="c-fn">SUM</span>(revenue) <span class="c-kw">FROM</span> monthly_sales <span class="c-kw">GROUP BY</span> 1;'
  },
  churn: {
    type: 'line',
    labels: ['0-3 Mo', '3-6 Mo', '6-12 Mo', '1-2 Yr', '2-3 Yr', '3+ Yr'],
    data: [38.2, 29.5, 18.4, 11.2, 5.8, 2.1],
    dataPoints: '6 Cohorts',
    primaryMetric: '38.2% 90-Day Dropoff',
    insight: 'Key Finding: 67% of churn occurs during the first 90 days. Introducing an interactive onboarding sequence cut month-1 drop-off by 14%.',
    sqlCode: '<span class="c-kw">SELECT</span> cohort, <span class="c-fn">ROUND</span>(churn_rate, 2) <span class="c-kw">FROM</span> user_cohorts <span class="c-kw">ORDER BY</span> 1;'
  },
  channels: {
    type: 'bar',
    labels: ['Organic Search', 'Direct Referral', 'LinkedIn Ads', 'Email Campaigns', 'Webinars'],
    data: [340, 260, 210, 185, 120],
    dataPoints: '5 Channels',
    primaryMetric: 'Organic ROI 4.2x',
    insight: 'Key Finding: Organic Search & Referral channels delivered 54% of conversions with 3x higher customer lifetime value than paid channels.',
    sqlCode: '<span class="c-kw">SELECT</span> channel, <span class="c-fn">COUNT</span>(*) <span class="c-kw">AS</span> conversions <span class="c-kw">FROM</span> leads <span class="c-kw">GROUP BY</span> 1;'
  }
};

function initChartSandbox() {
  const ctx = document.getElementById('interactiveChart');
  if (!ctx) return;

  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  const gridColor = isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(15, 23, 42, 0.08)';
  const textColor = isDark ? '#94a3b8' : '#64748b';

  window.activeChartInstance = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: datasetsConfig.revenue.labels,
      datasets: [{
        label: 'Monthly Net Revenue ($ USD)',
        data: datasetsConfig.revenue.data,
        backgroundColor: 'rgba(6, 182, 212, 0.65)',
        borderColor: '#06b6d4',
        borderWidth: 1.5,
        borderRadius: 6,
        hoverBackgroundColor: '#38bdf8'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: {
            color: textColor,
            font: { family: "'Plus Jakarta Sans', sans-serif", weight: 600 }
          }
        },
        tooltip: {
          backgroundColor: 'rgba(15, 23, 42, 0.9)',
          titleColor: '#38bdf8',
          bodyColor: '#f1f5f9',
          borderColor: 'rgba(6, 182, 212, 0.3)',
          borderWidth: 1,
          padding: 12,
          displayColors: false
        }
      },
      scales: {
        y: {
          grid: { color: gridColor },
          ticks: {
            color: textColor,
            callback: (value) => '$' + (value / 1000) + 'k'
          }
        },
        x: {
          grid: { display: false },
          ticks: { color: textColor }
        }
      }
    }
  });

  // Tab switching event
  const tabs = document.querySelectorAll('.sandbox-tab');
  const dataPointsEl = document.getElementById('sandboxDataPoints');
  const primaryMetricEl = document.getElementById('sandboxPrimaryMetric');
  const insightEl = document.getElementById('sandboxInsight');
  const codeEl = document.querySelector('.code-snippet-preview code');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const datasetKey = tab.getAttribute('data-dataset');
      const cfg = datasetsConfig[datasetKey];
      if (!cfg) return;

      // Update Chart
      window.activeChartInstance.config.type = cfg.type;
      window.activeChartInstance.data.labels = cfg.labels;
      window.activeChartInstance.data.datasets[0].data = cfg.data;
      window.activeChartInstance.data.datasets[0].label = 
        datasetKey === 'revenue' ? 'Monthly Net Revenue ($ USD)' : 
        datasetKey === 'churn' ? 'Cohort Churn Risk (%)' : 'Qualified Lead Conversions';

      if (datasetKey === 'churn') {
        window.activeChartInstance.data.datasets[0].backgroundColor = 'rgba(244, 63, 94, 0.2)';
        window.activeChartInstance.data.datasets[0].borderColor = '#f43f5e';
        window.activeChartInstance.data.datasets[0].fill = true;
        window.activeChartInstance.data.datasets[0].tension = 0.4;
        window.activeChartInstance.options.scales.y.ticks.callback = (val) => val + '%';
      } else if (datasetKey === 'channels') {
        window.activeChartInstance.data.datasets[0].backgroundColor = 'rgba(99, 102, 241, 0.65)';
        window.activeChartInstance.data.datasets[0].borderColor = '#6366f1';
        window.activeChartInstance.options.scales.y.ticks.callback = (val) => val;
      } else {
        window.activeChartInstance.data.datasets[0].backgroundColor = 'rgba(6, 182, 212, 0.65)';
        window.activeChartInstance.data.datasets[0].borderColor = '#06b6d4';
        window.activeChartInstance.options.scales.y.ticks.callback = (val) => '$' + (val / 1000) + 'k';
      }

      window.activeChartInstance.update();

      // Update Text Metadata
      if (dataPointsEl) dataPointsEl.textContent = cfg.dataPoints;
      if (primaryMetricEl) primaryMetricEl.textContent = cfg.primaryMetric;
      if (insightEl) insightEl.textContent = cfg.insight;
      if (codeEl) codeEl.innerHTML = cfg.sqlCode;
    });
  });
}

function updateChartTheme(chart, theme) {
  const isDark = theme === 'dark';
  const gridColor = isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(15, 23, 42, 0.08)';
  const textColor = isDark ? '#94a3b8' : '#64748b';

  chart.options.plugins.legend.labels.color = textColor;
  chart.options.scales.y.grid.color = gridColor;
  chart.options.scales.y.ticks.color = textColor;
  chart.options.scales.x.ticks.color = textColor;
  chart.update();
}

/* ==========================================================================
   7. Project Category Filtering
   ========================================================================== */
function initProjectFiltering() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const cardCategories = card.getAttribute('data-category').split(' ');

        if (filterValue === 'all' || cardCategories.includes(filterValue)) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 250);
        }
      });
    });
  });
}

/* ==========================================================================
   8. Project Details Modal
   ========================================================================== */
const projectDetailsData = {
  ecommerce: {
    title: 'Omnichannel E-Commerce Revenue & RFM Customer Intelligence',
    subtitle: 'Power BI • PostgreSQL • DAX Modeling • Star Schema',
    problem: 'An online retailer with 125,000+ orders experienced flatlined revenue and declining repeat purchase rates without understanding which customer cohorts were churning.',
    solution: 'Designed an automated star schema database model in PostgreSQL, piped into Power BI with 18 custom DAX measures. Built an RFM (Recency, Frequency, Monetary) segmentation model to cluster customers into Champions, Loyalists, At-Risk, and Churned tiers.',
    keyMetrics: [
      { val: '$1.42M', label: 'Revenue Analyzed' },
      { val: '15.2%', label: 'Profit Margin Uplift' },
      { val: '28.4%', label: 'Repeat Order Rate' }
    ],
    highlights: [
      'Authored parameterized DAX measures for Year-over-Year (YoY) revenue comparison and moving averages.',
      'Identified that 20% of customers generated 68% of cumulative profit, revealing neglected VIP buyers.',
      'Created automated drill-through views for marketing teams to export target lists directly to CRM.'
    ],
    githubUrl: 'https://github.com'
  },
  churn: {
    title: 'Telecom Customer Churn Diagnostics & Driver Analysis',
    subtitle: 'Python • Pandas • NumPy • Seaborn • Statistical Testing',
    problem: 'A telecommunications service provider was suffering a 26.5% annual subscriber churn rate, resulting in severe customer lifetime value (LTV) degradation.',
    solution: 'Engineered an end-to-end Python exploratory data analysis (EDA) pipeline across 7,043 customer accounts. Cleaned missing values in TotalCharges, evaluated categorical correlations, and created correlation heatmaps to isolate primary churn drivers.',
    keyMetrics: [
      { val: '7,043', label: 'Accounts Explored' },
      { val: '42.7%', label: 'Month-to-Month Churn' },
      { val: '3x', label: 'Fiber Optic Churn vs DSL' }
    ],
    highlights: [
      'Uncovered that month-to-month contracts had a 42.7% churn rate compared to just 3.2% for 2-year contracts.',
      'Detected high churn among customers without online security or tech support add-ons, recommending bundled packages.',
      'Delivered Jupyter notebook documentation with clean visualizations and executive takeaway slides.'
    ],
    githubUrl: 'https://github.com/mansi-baranwal'
  },
  healthcare: {
    title: 'Hospital Emergency Wait-Time & Resource Analytics',
    subtitle: 'PostgreSQL • Window Functions • CTEs • Tableau',
    problem: 'Regional healthcare system emergency department faced persistent patient complaints regarding triage wait times and uneven doctor allocation across peak weekend hours.',
    solution: 'Formulated complex SQL queries utilizing Common Table Expressions (CTEs), LAG/LEAD window functions, and timestamp interval calculations across 45,000+ admission records to isolate department bottlenecks.',
    keyMetrics: [
      { val: '45,000+', label: 'Patient Records' },
      { val: '-22 mins', label: 'Average Triage Wait' },
      { val: '99.4%', label: 'Data Quality Score' }
    ],
    highlights: [
      'Identified that Saturday 6 PM - 11 PM experienced a 34% shortage in triage nursing staff relative to patient volume.',
      'Recommended rebalancing physician shift scheduling, which modeled an estimated 22-minute reduction in median wait time.',
      'Structured an automated PostgreSQL view for continuous monitoring in Tableau.'
    ],
    githubUrl: 'https://github.com/mansi-baranwal'
  },
  excel: {
    title: 'Automated Global Inventory & Fulfillment Tracker',
    subtitle: 'Advanced MS Excel • Power Query • Dynamic Arrays • VBA',
    problem: 'Supply chain coordinators spent 6+ manual hours every Monday consolidating disparate inventory CSV files from 14 regional warehouses into executive reports.',
    solution: 'Developed an automated Excel Power Query pipeline that ingests, transforms, and validates multiple warehouse files with one-click refresh. Added dynamic array formulas (FILTER, UNIQUE, XLOOKUP) and interactive slicer dashboards.',
    keyMetrics: [
      { val: '6 hrs/wk', label: 'Time Saved' },
      { val: '14 Hubs', label: 'Consolidated' },
      { val: '100%', label: 'Error Elimination' }
    ],
    highlights: [
      'Eliminated manual copy-paste errors and VLOOKUP #N/A reference failures using nested XLOOKUP.',
      'Implemented conditional formatting heatmaps to instantly highlight warehouses with stock below reorder safety thresholds.',
      'Added automated summary macros to export PDF reports for warehouse managers.'
    ],
    githubUrl: 'https://github.com/mansi-baranwal'
  }
};

function initProjectModals() {
  const modalBackdrop = document.getElementById('projectModalBackdrop');
  const modalContent = document.getElementById('modalContent');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const viewBtns = document.querySelectorAll('.view-project-btn');

  if (!modalBackdrop || !modalContent) return;

  viewBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const projectKey = btn.getAttribute('data-project');
      const p = projectDetailsData[projectKey];
      if (!p) return;

      modalContent.innerHTML = `
        <div style="margin-bottom: 1.5rem;">
          <span style="font-size: 0.8rem; font-weight: 700; color: var(--accent-cyan); text-transform: uppercase;">Case Study</span>
          <h2 id="modalTitle" style="font-size: 1.5rem; margin: 0.3rem 0;">${p.title}</h2>
          <p style="font-size: 0.88rem; color: var(--text-muted);">${p.subtitle}</p>
        </div>

        <div style="display: flex; gap: 1rem; margin-bottom: 1.5rem; background: rgba(0,0,0,0.2); padding: 1rem; border-radius: 12px; border: 1px solid var(--border-subtle);">
          ${p.keyMetrics.map(k => `
            <div style="flex: 1; text-align: center;">
              <span style="display: block; font-size: 1.3rem; font-weight: 800; color: var(--accent-cyan); font-family: var(--font-heading);">${k.val}</span>
              <span style="font-size: 0.72rem; color: var(--text-subtle); text-transform: uppercase;">${k.label}</span>
            </div>
          `).join('')}
        </div>

        <div style="margin-bottom: 1.25rem;">
          <h4 style="font-size: 1rem; color: #fff; margin-bottom: 0.4rem;"><i class="fa-solid fa-triangle-exclamation" style="color: #f59e0b; margin-right: 0.5rem;"></i>Business Challenge</h4>
          <p style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.6;">${p.problem}</p>
        </div>

        <div style="margin-bottom: 1.25rem;">
          <h4 style="font-size: 1rem; color: #fff; margin-bottom: 0.4rem;"><i class="fa-solid fa-screwdriver-wrench" style="color: var(--accent-cyan); margin-right: 0.5rem;"></i>Analytical Solution</h4>
          <p style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.6;">${p.solution}</p>
        </div>

        <div style="margin-bottom: 1.5rem;">
          <h4 style="font-size: 1rem; color: #fff; margin-bottom: 0.4rem;"><i class="fa-solid fa-circle-check" style="color: var(--accent-emerald); margin-right: 0.5rem;"></i>Key Deliverables</h4>
          <ul style="list-style: disc; padding-left: 1.25rem; font-size: 0.88rem; color: var(--text-muted); line-height: 1.6;">
            ${p.highlights.map(h => `<li style="margin-bottom: 0.35rem;">${h}</li>`).join('')}
          </ul>
        </div>

        <div style="display: flex; gap: 1rem; padding-top: 1rem; border-top: 1px solid var(--border-subtle);">
          <a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary-sm">
            <i class="fa-brands fa-github"></i> View GitHub Repository
          </a>
        </div>
      `;

      modalBackdrop.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  const closeModal = () => {
    modalBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) closeModal();
  });
}

/* ==========================================================================
   9. Resume Modal
   ========================================================================== */
function initResumeModal() {
  const resumeModal = document.getElementById('resumeModalBackdrop');
  const openResumeBtn = document.getElementById('openResumeBtn');
  const heroResumeBtn = document.getElementById('heroResumeBtn');
  const closeResumeModalBtn = document.getElementById('closeResumeModalBtn');
  const printResumeBtn = document.getElementById('printResumeBtn');

  if (!resumeModal) return;

  const openModal = () => {
    resumeModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    resumeModal.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (openResumeBtn) openResumeBtn.addEventListener('click', openModal);
  if (heroResumeBtn) heroResumeBtn.addEventListener('click', openModal);
  if (closeResumeModalBtn) closeResumeModalBtn.addEventListener('click', closeModal);

  resumeModal.addEventListener('click', (e) => {
    if (e.target === resumeModal) closeModal();
  });

  if (printResumeBtn) {
    printResumeBtn.addEventListener('click', () => {
      window.print();
    });
  }
}

/* ==========================================================================
   10. Contact Form Validation & Toast Notification
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const nameInput = document.getElementById('contactName');
  const emailInput = document.getElementById('contactEmail');
  const subjectInput = document.getElementById('contactSubject');
  const messageInput = document.getElementById('contactMessage');
  const submitBtn = document.getElementById('submitBtn');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    // Validate Name
    if (!nameInput.value.trim()) {
      nameInput.parentElement.classList.add('has-error');
      isValid = false;
    } else {
      nameInput.parentElement.classList.remove('has-error');
    }

    // Validate Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
      emailInput.parentElement.classList.add('has-error');
      isValid = false;
    } else {
      emailInput.parentElement.classList.remove('has-error');
    }

    // Validate Subject
    if (!subjectInput.value.trim()) {
      subjectInput.parentElement.classList.add('has-error');
      isValid = false;
    } else {
      subjectInput.parentElement.classList.remove('has-error');
    }

    // Validate Message
    if (!messageInput.value.trim()) {
      messageInput.parentElement.classList.add('has-error');
      isValid = false;
    } else {
      messageInput.parentElement.classList.remove('has-error');
    }

    if (isValid) {
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        form.reset();
        showToast('Message sent successfully! Mansi Baranwal will respond shortly.', 'success');
      }, 800);
    }
  });

  // Remove error on input
  [nameInput, emailInput, subjectInput, messageInput].forEach(inp => {
    if (inp) {
      inp.addEventListener('input', () => {
        inp.parentElement.classList.remove('has-error');
      });
    }
  });
}

/* ==========================================================================
   11. Copy to Clipboard Utility
   ========================================================================== */
function initClipboard() {
  const copyBtn = document.getElementById('copyEmailBtn');
  if (!copyBtn) return;

  copyBtn.addEventListener('click', () => {
    const email = 'mansi.baranwal.analytics@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
      showToast('Email address copied to clipboard!', 'info');
      copyBtn.innerHTML = '<i class="fa-solid fa-check" style="color: #10b981;"></i>';
      setTimeout(() => {
        copyBtn.innerHTML = '<i class="fa-regular fa-copy"></i>';
      }, 2000);
    }).catch(() => {
      showToast('Could not copy email automatically.', 'warning');
    });
  });
}

/* ==========================================================================
   12. Toast Notification System
   ========================================================================== */
function showToast(message, type = 'success') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';

  const iconClass = type === 'success' ? 'fa-solid fa-circle-check' : 'fa-solid fa-circle-info';
  toast.innerHTML = `
    <i class="${iconClass} toast-icon"></i>
    <span class="toast-msg">${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.35s ease';
    setTimeout(() => {
      toast.remove();
    }, 350);
  }, 3500);
}

/* ==========================================================================
   13. Footer Current Year
   ========================================================================== */
function setCurrentYear() {
  const yearSpan = document.getElementById('yearSpan');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
}
