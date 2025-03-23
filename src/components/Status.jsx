
export default function Status({dados, title, description}) {


    return (
<>
<div class="stats shadow">
  <div class="stat">
    <div class="stat-title">{title}</div>
    <div class="stat-value">{dados}</div>
    <div class="stat-desc">{description}</div>
  </div>
</div>
</>
    )}