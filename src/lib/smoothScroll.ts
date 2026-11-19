let activeFrame = 0;

export const cancelSmoothScroll = () => {
  cancelAnimationFrame(activeFrame);
  activeFrame = 0;
};

export const smoothScrollTo = (target: string | HTMLElement) => {
  const element = typeof target === "string" ? document.querySelector<HTMLElement>(target) : target;
  if (!element) return;
  cancelSmoothScroll();
  const start = window.scrollY;
  const destination = start + element.getBoundingClientRect().top - 22;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    window.scrollTo(0, destination);
    return;
  }
  const distance = destination - start;
  const duration = Math.min(1250, Math.max(620, Math.abs(distance) * 0.42));
  const startedAt = performance.now();
  const frame = (now: number) => {
    const progress = Math.min(1, (now - startedAt) / duration);
    const eased = 1 - Math.pow(1 - progress, 4);
    window.scrollTo(0, start + distance * eased);
    if (progress < 1) activeFrame = requestAnimationFrame(frame);
  };
  activeFrame = requestAnimationFrame(frame);
};
