{{ partial "header.html" . }}
{{ partial "page-header.html" . }}
<section class="error">
    <h1 class="error__text">{{ .Params.errortext }}</h1>
    <p class="error__code">{{ .Params.errorcode }}</p>
    {{ .Content }}
</section>
{{ partial "page-footer.html" . }}
{{ partial "footer.html" . }}