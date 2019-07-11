using Newtonsoft.Json;
///<Summary>
/// Se coloca TaskItem a la Clase en lugar de Task,
//porque Task es una palabra Reservada de .NetCore
/// </Summary>
///
namespace ParcialDotNet.Models
{
    public class ReservaItem
    {
        [JsonProperty("id")]

        public int id { get; set; }

        [JsonProperty("codigo")]

        public int codigo { get; set; }
        

        [JsonProperty("Nombre")]
        public string Nombre { get; set; }
        [JsonProperty("NumeroSilla")]
        public string NumeroSilla { get; set; }
        [JsonProperty("TipoSilla")]
        public bool TipoSilla { get; set; }
    }
}