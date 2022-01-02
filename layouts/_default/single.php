{{ partial "header.html" . }}
{{ partial "page-header.html" . }}

<article class="content">
    <h1 class="pagetitle">{{ .Title }}</h1>
    {{ .Content }}
</article>

{{ partial "page-footer.html" . }}
{{ partial "footer.html" . }}
