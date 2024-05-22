$$ = (id) => {return document.getElementById(id);}

hoverCardFotos = (exibir, foto) =>
{
    if(exibir)
    {
        $$("fotosParalelas_"+ foto).classList.add("foto-principal-off");
        $$("fotoPrincipal_"+ foto).classList.add("foto-principal-on");
        $$("fotoPrincipal_"+ foto).classList.remove("foto-principal-off");
    }
    else
    {
        $$("fotosParalelas_"+ foto).classList.remove("foto-principal-off");
        $$("fotoPrincipal_"+ foto).classList.remove("foto-principal-on");
        $$("fotoPrincipal_"+ foto).classList.add("foto-principal-off");
    }
}

selecionarMenuMobile = (url) =>
{
    fecharMenuMobile();
    window.location.href=url;
}

fecharMenuMobile = () =>
{
    $$("menuMobileLateral").classList.add("menu-mobile-off"); 
   $$("menuMobileLateral").classList.remove("menu-mobile-on"); 
}

abrirMenuMobile = () =>
{
   $$("menuMobileLateral").classList.remove("menu-mobile-off"); 
   $$("menuMobileLateral").classList.add("menu-mobile-on"); 
}