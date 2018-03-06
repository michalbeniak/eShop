using System.Web.Mvc;
using Unity;
using Unity.AspNet.Mvc;
using foodPowder.Providers;
using foodPowder.Interfaces;
using System.Web.Http;

namespace akqaInterview
{
    public class Bootstrapper
    {
        public static IUnityContainer Initialise()
        {
            var container = BuildUnityContainer();
            DependencyResolver.SetResolver(new UnityDependencyResolver(container));
            return container;
        }
        private static IUnityContainer BuildUnityContainer()
        {
            var container = new UnityContainer();

            // register all your components with the container here  
            //This is the important line to edit  
            //container.RegisterWebApiControllers(GlobalConfiguration.Configuration);
            container.RegisterType<IProductProvider, ProductProvider>();
            //container.RegisterType<INumbersHelper, NumbersHelper>();


            RegisterTypes(container);
            return container;
        }
        public static void RegisterTypes(IUnityContainer container)
        {

        }
    }
}