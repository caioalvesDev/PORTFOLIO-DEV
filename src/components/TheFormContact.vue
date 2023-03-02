<template>
    <div class="card">
        <header class="card-header">
            <p class="card-header-title">
                &lt; Contato /&gt;
            </p>
        </header>
        <div class="card-content">
            <div class="content">
                <div class="field">
                    <label class="label">Email</label>
                    <div class="control has-icons-left has-icons-right">
                        <input class="input " type="email" placeholder="Digite seu email">
                        <span class="icon is-small is-left">
                            <i class="fas fa-envelope"></i>
                        </span>
                        <span class="icon is-small is-right">
                            <i class="fas fa-exclamation-triangle"></i>
                        </span>
                    </div>
                </div>

                <div class="field">
                    <label class="label">Mesagem</label>
                    <div class="control">
                        <textarea class="textarea" placeholder="Digite seu texto"></textarea>
                    </div>
                </div>

                <div class="field is-grouped">
                    <div class="control">
                        <button class="button is-dark">Enviar</button>
                    </div>

                </div>
            </div>
        </div>

    </div>
</template>