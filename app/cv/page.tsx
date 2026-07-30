export default function CV() {
  return (
    <div>
      <a href="/cv.pdf" download>
        Download CV (PDF)
      </a>

      <iframe
        src="cv.pdf"
        width="100%"
        height="800"
        title="CV"
      />
    </div>
  );
}