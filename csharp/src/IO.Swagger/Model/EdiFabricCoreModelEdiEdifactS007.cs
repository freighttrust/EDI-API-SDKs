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
    /// EdiFabricCoreModelEdiEdifactS007
    /// </summary>
    [DataContract]
    public partial class EdiFabricCoreModelEdiEdifactS007 :  IEquatable<EdiFabricCoreModelEdiEdifactS007>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="EdiFabricCoreModelEdiEdifactS007" /> class.
        /// </summary>
        /// <param name="applicationRecipientIdentification1">applicationRecipientIdentification1.</param>
        /// <param name="identificationCodeQualifier2">identificationCodeQualifier2.</param>
        public EdiFabricCoreModelEdiEdifactS007(string applicationRecipientIdentification1 = default(string), string identificationCodeQualifier2 = default(string))
        {
            this.ApplicationRecipientIdentification1 = applicationRecipientIdentification1;
            this.IdentificationCodeQualifier2 = identificationCodeQualifier2;
        }
        
        /// <summary>
        /// Gets or Sets ApplicationRecipientIdentification1
        /// </summary>
        [DataMember(Name="applicationRecipientIdentification_1", EmitDefaultValue=false)]
        public string ApplicationRecipientIdentification1 { get; set; }

        /// <summary>
        /// Gets or Sets IdentificationCodeQualifier2
        /// </summary>
        [DataMember(Name="identificationCodeQualifier_2", EmitDefaultValue=false)]
        public string IdentificationCodeQualifier2 { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class EdiFabricCoreModelEdiEdifactS007 {\n");
            sb.Append("  ApplicationRecipientIdentification1: ").Append(ApplicationRecipientIdentification1).Append("\n");
            sb.Append("  IdentificationCodeQualifier2: ").Append(IdentificationCodeQualifier2).Append("\n");
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
            return this.Equals(input as EdiFabricCoreModelEdiEdifactS007);
        }

        /// <summary>
        /// Returns true if EdiFabricCoreModelEdiEdifactS007 instances are equal
        /// </summary>
        /// <param name="input">Instance of EdiFabricCoreModelEdiEdifactS007 to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(EdiFabricCoreModelEdiEdifactS007 input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.ApplicationRecipientIdentification1 == input.ApplicationRecipientIdentification1 ||
                    (this.ApplicationRecipientIdentification1 != null &&
                    this.ApplicationRecipientIdentification1.Equals(input.ApplicationRecipientIdentification1))
                ) && 
                (
                    this.IdentificationCodeQualifier2 == input.IdentificationCodeQualifier2 ||
                    (this.IdentificationCodeQualifier2 != null &&
                    this.IdentificationCodeQualifier2.Equals(input.IdentificationCodeQualifier2))
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
                if (this.ApplicationRecipientIdentification1 != null)
                    hashCode = hashCode * 59 + this.ApplicationRecipientIdentification1.GetHashCode();
                if (this.IdentificationCodeQualifier2 != null)
                    hashCode = hashCode * 59 + this.IdentificationCodeQualifier2.GetHashCode();
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