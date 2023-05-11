<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{ config('app.name') }}</title>
    @if(isset($token))
    <script>
        localStorage.setItem('token', '{{ $token }}');
        localStorage.setItem('user', JSON.stringify({!! $user !!}));
        window.location.href = '{{  url('/') }}';
    </script>
    @endif
    @vite('resources/css/app.css')
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    @viteReactRefresh
    @vite('resources/js/app.jsx')
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>
<body class="dark">
    <div id="app" class="min-h-screen bg-gray-50 dark:bg-gray-900"></div>
</body>
</html>