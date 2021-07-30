'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">little-crm documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-6940f498c5430ce95c1111821f33c462"' : 'data-target="#xs-components-links-module-AppModule-6940f498c5430ce95c1111821f33c462"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-6940f498c5430ce95c1111821f33c462"' :
                                            'id="xs-components-links-module-AppModule-6940f498c5430ce95c1111821f33c462"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavigationMainComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavigationMainComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link" >CoreModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-CoreModule-8ac432c175408d1c8be7b8a86e88780a"' : 'data-target="#xs-directives-links-module-CoreModule-8ac432c175408d1c8be7b8a86e88780a"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-CoreModule-8ac432c175408d1c8be7b8a86e88780a"' :
                                        'id="xs-directives-links-module-CoreModule-8ac432c175408d1c8be7b8a86e88780a"' }>
                                        <li class="link">
                                            <a href="directives/HighlightDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HighlightDirective</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-CoreModule-8ac432c175408d1c8be7b8a86e88780a"' : 'data-target="#xs-pipes-links-module-CoreModule-8ac432c175408d1c8be7b8a86e88780a"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-CoreModule-8ac432c175408d1c8be7b8a86e88780a"' :
                                            'id="xs-pipes-links-module-CoreModule-8ac432c175408d1c8be7b8a86e88780a"' }>
                                            <li class="link">
                                                <a href="pipes/TaxPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TaxPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CustomerModule.html" data-type="entity-link" >CustomerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CustomerModule-bd5f7b5de247ba36024b99c25f740b14"' : 'data-target="#xs-components-links-module-CustomerModule-bd5f7b5de247ba36024b99c25f740b14"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CustomerModule-bd5f7b5de247ba36024b99c25f740b14"' :
                                            'id="xs-components-links-module-CustomerModule-bd5f7b5de247ba36024b99c25f740b14"' }>
                                            <li class="link">
                                                <a href="components/CustomerDashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CustomerDashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CustomerEditComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CustomerEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CustomerListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CustomerListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CustomerNewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CustomerNewComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CustomerRoutingModule.html" data-type="entity-link" >CustomerRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DefaultPagesModule.html" data-type="entity-link" >DefaultPagesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DefaultPagesModule-e3ac5fa913f6a652d8c9ed7cf64a15b4"' : 'data-target="#xs-components-links-module-DefaultPagesModule-e3ac5fa913f6a652d8c9ed7cf64a15b4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DefaultPagesModule-e3ac5fa913f6a652d8c9ed7cf64a15b4"' :
                                            'id="xs-components-links-module-DefaultPagesModule-e3ac5fa913f6a652d8c9ed7cf64a15b4"' }>
                                            <li class="link">
                                                <a href="components/NotFoundPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotFoundPageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LegalModule.html" data-type="entity-link" >LegalModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LegalModule-d16b8e53243c58da57702808d0388b4c"' : 'data-target="#xs-components-links-module-LegalModule-d16b8e53243c58da57702808d0388b4c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LegalModule-d16b8e53243c58da57702808d0388b4c"' :
                                            'id="xs-components-links-module-LegalModule-d16b8e53243c58da57702808d0388b4c"' }>
                                            <li class="link">
                                                <a href="components/LegalNoticePageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LegalNoticePageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MaterialModule.html" data-type="entity-link" >MaterialModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/StartPageModule.html" data-type="entity-link" >StartPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-StartPageModule-7d1ae04fa203b597b4df2c9d64511225"' : 'data-target="#xs-components-links-module-StartPageModule-7d1ae04fa203b597b4df2c9d64511225"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-StartPageModule-7d1ae04fa203b597b4df2c9d64511225"' :
                                            'id="xs-components-links-module-StartPageModule-7d1ae04fa203b597b4df2c9d64511225"' }>
                                            <li class="link">
                                                <a href="components/StartPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StartPageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TemplateSyntaxModule.html" data-type="entity-link" >TemplateSyntaxModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TemplateSyntaxModule-7717e0736cb53eb62c0e8cbee47025bc"' : 'data-target="#xs-components-links-module-TemplateSyntaxModule-7717e0736cb53eb62c0e8cbee47025bc"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TemplateSyntaxModule-7717e0736cb53eb62c0e8cbee47025bc"' :
                                            'id="xs-components-links-module-TemplateSyntaxModule-7717e0736cb53eb62c0e8cbee47025bc"' }>
                                            <li class="link">
                                                <a href="components/SubComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SubComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TemplateSyntaxPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TemplateSyntaxPageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/CustomerService.html" data-type="entity-link" >CustomerService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/OneCustomerResolver.html" data-type="entity-link" >OneCustomerResolver</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Customer.html" data-type="entity-link" >Customer</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});