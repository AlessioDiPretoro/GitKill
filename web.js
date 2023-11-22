const settingBtn = document.getElementById("settings-tab");
if (settingBtn != null) {
  settingBtn.click();
}
setTimeout(function () {
  // click Delete this repository
  const deleteBtn = document.getElementById("dialog-show-repo-delete-menu-dialog");
  if (deleteBtn != null) {
    deleteBtn.click();
    // click I want to delete this repository
    const deleteBtn2 = document.getElementById("repo-delete-proceed-button");
    if (deleteBtn2 != null) {
      deleteBtn2.click();
      // click I have read and ...
      const deleteBtn3 = document.getElementById("repo-delete-proceed-button");
      if (deleteBtn3 != null) {
        deleteBtn3.click();
        // set the input validation and click delete
        const verField = document.getElementById("verification_field");
        if (verField != null) {
          const verText = verField.dataset.repoNwo;
          verField.value = verText;
          const deleteFinalBtn = document.getElementById("repo-delete-proceed-button");
          deleteFinalBtn.disabled = false;
          deleteFinalBtn.click();
        }
      }
    }
  }
}, 2000);
