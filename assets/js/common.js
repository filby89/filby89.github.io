$(document).ready(function() {
    $('a.abstract').click(function() {
        $(this).parent().parent().find(".abstract.hidden").toggleClass('open');
    });
    $('a.bibtex').click(function() {
        const button = $(this);
        const container = button.parent().parent();
        const bibtexText = container.find(".bibtex.hidden code").text().trim()
            || container.find(".bibtex.hidden").text().trim();

        if (!bibtexText) {
            return;
        }

        const originalLabel = button.text();
        const setCopiedLabel = () => {
            button.text('Copied');
            setTimeout(() => button.text(originalLabel), 1200);
        };

        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(bibtexText).then(setCopiedLabel).catch(function() {
                container.find(".bibtex.hidden").toggleClass('open');
            });
            return;
        }

        container.find(".bibtex.hidden").toggleClass('open');
    });
    $('a').removeClass('waves-effect waves-light');
});
