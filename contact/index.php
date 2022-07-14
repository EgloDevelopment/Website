<?php include("../resources/headers/header.php"); ?>
<body width="device-width">
<div class="position-absolute top-50 start-50 translate-middle">
<h1 class="center">Contact</h1>
<br>
<br>
<form action="https://backend.eglo.pw/contact/new" method="POST">
<input type="email" name="email" class="form-control" placeholder="Email" required>
<br>
<input type="name" name="name" class="form-control" placeholder="Name" required>
<br>
<input type="name" name="issue" class="form-control" placeholder="Describe issue" required>
<br>
<div class="input-group mb-3">
  <label class="input-group-text" for="inputGroupSelect01">Category</label>
  <select class="form-select" name="category" id="inputGroupSelect01">
    <option selected>Select</option>
    <option value="1">Nymi</option>
    <option value="2">Phonix</option>
    <option value="3">Gamr</option>
    <option value="3">NotyFi</option>
    <option value="3">Trakr</option>
    <option value="3">Soacl</option>
    <option value="3">Other</option>
  </select>
</div>
<div class="center">
<input type="submit" class="btn btn-primary">
</div>
</div>
</form>
</body>
<div style="margin-top: 1000px;">
<?php include("../resources/headers/footer.php"); ?>
</div>