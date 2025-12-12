<script>
  function togglePanel(id) {
    const panels = ["messagePanel", "sharePanel", "notificationPanel"];

    panels.forEach(p => {
        document.getElementById(p).style.display = (p === id) ?
            (document.getElementById(p).style.display === "block" ? "none" : "block")
            : "none";
    });
}
</script>
