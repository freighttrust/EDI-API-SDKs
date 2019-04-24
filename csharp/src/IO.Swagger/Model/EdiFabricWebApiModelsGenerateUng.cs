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
    /// EdiFabricWebApiModelsGenerateUng
    /// </summary>
    [DataContract]
    public partial class EdiFabricWebApiModelsGenerateUng :  IEquatable<EdiFabricWebApiModelsGenerateUng>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="EdiFabricWebApiModelsGenerateUng" /> class.
        /// </summary>
        /// <param name="settings">settings.</param>
        /// <param name="ung">ung.</param>
        public EdiFabricWebApiModelsGenerateUng(EdiFabricWebApiModelsGenerateSettings settings = default(EdiFabricWebApiModelsGenerateSettings), EdiFabricCoreModelEdiEdifactUNG ung = default(EdiFabricCoreModelEdiEdifactUNG))
        {
            this.Settings = settings;
            this.Ung = ung;
        }
        
        /// <summary>
        /// Gets or Sets Settings
        /// </summary>
        [DataMember(Name="settings", EmitDefaultValue=false)]
        public EdiFabricWebApiModelsGenerateSettings Settings { get; set; }

        /// <summary>
        /// Gets or Sets Ung
        /// </summary>
        [DataMember(Name="ung", EmitDefaultValue=false)]
        public EdiFabricCoreModelEdiEdifactUNG Ung { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class EdiFabricWebApiModelsGenerateUng {\n");
            sb.Append("  Settings: ").Append(Settings).Append("\n");
            sb.Append("  Ung: ").Append(Ung).Append("\n");
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
            return this.Equals(input as EdiFabricWebApiModelsGenerateUng);
        }

        /// <summary>
        /// Returns true if EdiFabricWebApiModelsGenerateUng instances are equal
        /// </summary>
        /// <param name="input">Instance of EdiFabricWebApiModelsGenerateUng to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(EdiFabricWebApiModelsGenerateUng input)
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
                    this.Ung == input.Ung ||
                    (this.Ung != null &&
                    this.Ung.Equals(input.Ung))
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
                if (this.Ung != null)
                    hashCode = hashCode * 59 + this.Ung.GetHashCode();
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