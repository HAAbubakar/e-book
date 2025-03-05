<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ghostwriting Services</title>
    <?php include_once("includes/head.php") ?>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
        }
        .button-container {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 10px;
        }
        .btn {
            padding: 10px 20px;
            border: none;
            background-color: teal;
            color: white;
            cursor: pointer;
            border-radius: 5px;
            font-size: 16px;
        }
        .btn:hover {
            background-color: darkcyan;
        }
        .content {
            display: none;
            margin-top: 20px;
        }
        .content.active {
            display: block;
        }
    </style>
</head>
<body>

    <h2>Affordable Ghostwriting Services For Every Genre</h2>
    <p>If you're looking for a ghostwriter with experience in the niche you need, you are in the right place.</p>

    <div class="button-container">
        <button class="btn" onclick="showContent('fiction')">Fiction</button>
        <button class="btn" onclick="showContent('nonfiction')">Nonfiction</button>
        <button class="btn" onclick="showContent('biography')">Biography</button>
        <button class="btn" onclick="showContent('selfhelp')">Self-Help</button>
    </div>

    <div id="fiction" class="content active">
        <h3>Fiction</h3>
        <p>Don't let your fictional story stay hidden. Reach out to us, and our expert fiction ghostwriters will help bring your vision to life.</p>
    </div>

    <div id="nonfiction" class="content">
        <h3>Nonfiction</h3>
        <p>We provide nonfiction ghostwriting services to help you share knowledge, experiences, and insights in a compelling way.</p>
    </div>

    <div id="biography" class="content">
        <h3>Biography</h3>
        <p>Our biography ghostwriters help you tell your life story with authenticity and depth.</p>
    </div>

    <div id="selfhelp" class="content">
        <h3>Self-Help</h3>
        <p>Empower your readers with a self-help book that inspires positive change.</p>
    </div>

    <script>
        function showContent(id) {
            let contents = document.querySelectorAll(".content");
            contents.forEach(content => content.classList.remove("active"));

            document.getElementById(id).classList.add("active");
        }
    </script>

</body>
</html>
