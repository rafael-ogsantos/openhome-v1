import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
    MatSelectModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatGridListModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatMenuModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatTableModule
} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import * as pattern from 'patternomaly';

// Paginas customizadas
import { LoginPageComponent } from './pages/login/login.page';
import { HomePageComponent } from './pages/inicio/inicio.page';
import { CadastrarImoveisComponent } from './pages/imoveis/cadastrar/cadastrar.page';
import { CadastrarUsuariosComponent } from './pages/usuarios/cadastrar/cadastrar.page';
import { CadastrarCondominiosComponent } from './pages/condominios/cadastrar/cadastrar.page';
import { BuscarImoveisComponent } from './pages/imoveis/buscar/buscar.page';
import { BuscarUsuariosComponent } from './pages/usuarios/buscar/buscar.page';
import { BuscarCondominiosComponent } from './pages/condominios/buscar/buscar.page';
import { ContratoseDocumentosComponent } from './pages/contratos-e-documentos/contratos-e-documentos.page';
import { FinanceiroNovoComponent } from './pages/financeiro/novo/novo.page';
import { CRMPageComponent } from './pages/crm/novo/crm.page';
import { ConfigPageComponent } from './pages/configuracoes/configuracoes.page';
import { ErrorCustomComponent } from './pages/error/error.page';

// Elementos customizados
import { LayoutComponent } from './elements/layout/layout.component';
import { HeaderComponent } from './elements/header/header.component';
import { AsideComponent } from './elements/aside/aside.component';
import { BrandComponent } from './elements/brand/brand.component';
import { NotificationsComponent } from './elements/notifications/notifications.component';
import { ChartComponent } from './elements/chart/chart.component';
import { MensagensComponent } from './elements/mensagens/mensagens.component';
import { InputUseComponent } from './elements/use-input/use-input.component';
import { ImoveisListComponent } from './elements/imoveis/imoveis.component';
import { UsuariosTableComponent } from './elements/table/table.component';
import { PaginacaoComponent } from './elements/paginacao/paginacao.component';
import { TitleElComponent } from './elements/title/title.component';

// Configurar e liberar Rotas de navegação
const appRoutes: Routes = [

    {
        path: '',
        redirectTo: '/inicio',
        pathMatch: 'full'
    },

    {
        path: 'inicio',
        component: HomePageComponent
    },

    // Login page
    {
        path: 'login',
        component: LoginPageComponent,
        data: { title: 'Login' }
    },

    // Redireciona /imoveis para /imoveis/cadastrar
    {
        path: 'imoveis',
        redirectTo: '/imoveis/cadastrar',
        pathMatch: 'full'
    },

    // Cadastrar Imovéis
    {
        path: 'imoveis/cadastrar',
        component: CadastrarImoveisComponent,
        data: { title: 'Cadastrar Imovéis' }
    },

    // Buscar Imovéis
    {
        path: 'imoveis/buscar',
        component: BuscarImoveisComponent,
        data: { title: 'Buscar Imovéis' }
    },

    // Redireciona /usuarios para /usuarios/cadastrar
    {
        path: 'usuarios',
        redirectTo: '/usuarios/cadastrar',
        pathMatch: 'full'
    },

    // Cadastrar Imovéis
    {
        path: 'usuarios/cadastrar',
        component: CadastrarUsuariosComponent,
        data: { title: 'Cadastrar Usuários' }
    },

    // Buscar Imovéis
    {
        path: 'usuarios/buscar',
        component: BuscarUsuariosComponent,
        data: { title: 'Buscar Usuários' }
    },


    // Redireciona /condominios para /condominios/cadastrar
    {
        path: 'condominios',
        redirectTo: '/condominios/cadastrar',
        pathMatch: 'full'
    },

    // Cadastrar Imovéis
    {
        path: 'condominios/cadastrar',
        component: CadastrarCondominiosComponent,
        data: { title: 'Cadastrar Condomínios' }
    },

    // Buscar Imovéis
    {
        path: 'condominios/buscar',
        component: BuscarCondominiosComponent,
        data: { title: 'Buscar Condomínios' }
    },

    // Contratos e Documentos
    {
        path: 'contratos-e-documentos',
        component: ContratoseDocumentosComponent,
        data: { title: 'Contratos e Documentos' }
    },

    // Financeiro
    {
        path: 'financeiro',
        redirectTo: '/financeiro/novo',
        pathMatch: 'full'
    },

    {
        path: 'financeiro/novo',
        component: FinanceiroNovoComponent,
        data: { title: 'Financeiro Novo' }
    },

    // CRM to CRM Novo
    {
        path: 'crm',
        redirectTo: '/crm/novo',
        pathMatch: 'full'
    },

    {
        path: 'crm/novo',
        component: CRMPageComponent,
        data: { title: 'CRM' }
    },

    {
        path: 'configuracoes',
        component: ConfigPageComponent,
        data: { title: 'Configurações' }
    },

    // Invoca a página de erro 404
    {
        path: '**',
        component: ErrorCustomComponent,
        data: { title: '404: Página não encontrada' }
    }
];



@NgModule({
  declarations: [
    AppComponent,

    LoginPageComponent,
    HomePageComponent,
    CadastrarImoveisComponent,
    CadastrarUsuariosComponent,
    CadastrarCondominiosComponent,
    BuscarImoveisComponent,
    BuscarUsuariosComponent,
    BuscarCondominiosComponent,
    ContratoseDocumentosComponent,
    FinanceiroNovoComponent,
    CRMPageComponent,
    ConfigPageComponent,
    ErrorCustomComponent,

    BrandComponent,
    LayoutComponent,
    HeaderComponent,
    AsideComponent,
    NotificationsComponent,
    ChartComponent,
    MensagensComponent,
    InputUseComponent,
    ImoveisListComponent,
    UsuariosTableComponent,
    PaginacaoComponent,
    TitleElComponent
  ],
  imports: [
    RouterModule,
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatGridListModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    ChartsModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatTableModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
