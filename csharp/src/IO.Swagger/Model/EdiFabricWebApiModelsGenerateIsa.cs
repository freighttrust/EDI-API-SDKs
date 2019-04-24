/* 
 * EdiFabric API
 *
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
 * 
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 */

using System;
using System.Linq;
using System.IO;
using System.Text;
using System.Text.RegularExpressions;
using System.Collections;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Runtime.Serialization;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System.ComponentModel.DataAnnotations;
using SwaggerDateConverter = IO.Swagger.Client.SwaggerDateConverter;

namespace IO.Swagger.Model
{
    /// <summary>
    /// EdiFabricWebApiModelsGenerateIsa
    /// </summary>
    [DataContract]
    public partial class EdiFabricWebApiModelsGenerateIsa :  IEquatable<EdiFabricWebApiModelsGenerateIsa>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="EdiFabricWebApiModelsGenerateIsa" /> class.
        /// </summary>
        /// <param name="settings">settings.</param>
        /// <param name="isa">isa.</param>
        public EdiFabricWebApiModelsGenerateIsa(EdiFabricWebApiModelsGenerateSettings settings = default(EdiFabricWebApiModelsGenerateSettings), EdiFabricCoreModelEdiX12ISA isa = default(EdiFabricCoreModelEdiX12ISA))
        {
            this.Settings = settings;
            this.Isa = isa;
        }
        
        /// <summary>
        /// Gets or Sets Settings
        /// </summary>
        [DataMember(Name="settings", EmitDefaultValue=false)]
        public EdiFabricWebApiModelsGenerateSettings Settings { get; set; }

        /// <summary>
        /// Gets or Sets Isa
        /// </summary>
        [DataMember(Name="isa", EmitDefaultValue=false)]
        public EdiFabricCoreModelEdiX12ISA Isa { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class EdiFabricWebApiModelsGenerateIsa {\n");
            sb.Append("  Settings: ").Append(Settings).Append("\n");
            sb.Append("  Isa: ").Append(Isa).Append("\n");
            sb.Append("}\n");
            return sb.ToString();
        }
  
        /// <summary>
        /// Returns the JSON string presentation of the object
        /// </summary>
        /// <returns>JSON string presentation of the object</returns>
        public virtual string ToJson()
        {
            return JsonConvert.SerializeObject(this, Formatting.Indented);
        }

        /// <summary>
        /// Returns true if objects are equal
        /// </summary>
        /// <param name="input">Object to be compared</param>
        /// <returns>Boolean</returns>
        public override bool Equals(object input)
        {
            return this.Equals(input as EdiFabricWebApiModelsGenerateIsa);
        }

        /// <summary>
        /// Returns true if EdiFabricWebApiModelsGenerateIsa instances are equal
        /// </summary>
        /// <param name="input">Instance of EdiFabricWebApiModelsGenerateIsa to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(EdiFabricWebApiModelsGenerateIsa input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Settings == input.Settings ||
                    (this.Settings != null &&
                    this.Settings.Equals(input.Settings))
                ) && 
                (
                    this.Isa == input.Isa ||
                    (this.Isa != null &&
                    this.Isa.Equals(input.Isa))
                );
        }

        /// <summary>
        /// Gets the hash code
        /// </summary>
        /// <returns>Hash code</returns>
        public override int GetHashCode()
        {
            unchecked // Overflow is fine, just wrap
            {
                int hashCode = 41;
                if (this.Settings != null)
                    hashCode = hashCode * 59 + this.Settings.GetHashCode();
                if (this.Isa != null)
                    hashCode = hashCode * 59 + this.Isa.GetHashCode();
                return hashCode;
            }
        }

        /// <summary>
        /// To validate all properties of the instance
        /// </summary>
        /// <param name="validationContext">Validation context</param>
        /// <returns>Validation Result</returns>
        IEnumerable<System.ComponentModel.DataAnnotations.ValidationResult> IValidatableObject.Validate(ValidationContext validationContext)
        {
            yield break;
        }
    }

}