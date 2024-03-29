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
    /// EdiFabricCoreModelEdiEdifactS008
    /// </summary>
    [DataContract]
    public partial class EdiFabricCoreModelEdiEdifactS008 :  IEquatable<EdiFabricCoreModelEdiEdifactS008>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="EdiFabricCoreModelEdiEdifactS008" /> class.
        /// </summary>
        /// <param name="messageVersionNumber1">messageVersionNumber1.</param>
        /// <param name="messageReleaseNumber2">messageReleaseNumber2.</param>
        /// <param name="associationAssignedCode3">associationAssignedCode3.</param>
        public EdiFabricCoreModelEdiEdifactS008(string messageVersionNumber1 = default(string), string messageReleaseNumber2 = default(string), string associationAssignedCode3 = default(string))
        {
            this.MessageVersionNumber1 = messageVersionNumber1;
            this.MessageReleaseNumber2 = messageReleaseNumber2;
            this.AssociationAssignedCode3 = associationAssignedCode3;
        }
        
        /// <summary>
        /// Gets or Sets MessageVersionNumber1
        /// </summary>
        [DataMember(Name="messageVersionNumber_1", EmitDefaultValue=false)]
        public string MessageVersionNumber1 { get; set; }

        /// <summary>
        /// Gets or Sets MessageReleaseNumber2
        /// </summary>
        [DataMember(Name="messageReleaseNumber_2", EmitDefaultValue=false)]
        public string MessageReleaseNumber2 { get; set; }

        /// <summary>
        /// Gets or Sets AssociationAssignedCode3
        /// </summary>
        [DataMember(Name="associationAssignedCode_3", EmitDefaultValue=false)]
        public string AssociationAssignedCode3 { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class EdiFabricCoreModelEdiEdifactS008 {\n");
            sb.Append("  MessageVersionNumber1: ").Append(MessageVersionNumber1).Append("\n");
            sb.Append("  MessageReleaseNumber2: ").Append(MessageReleaseNumber2).Append("\n");
            sb.Append("  AssociationAssignedCode3: ").Append(AssociationAssignedCode3).Append("\n");
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
            return this.Equals(input as EdiFabricCoreModelEdiEdifactS008);
        }

        /// <summary>
        /// Returns true if EdiFabricCoreModelEdiEdifactS008 instances are equal
        /// </summary>
        /// <param name="input">Instance of EdiFabricCoreModelEdiEdifactS008 to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(EdiFabricCoreModelEdiEdifactS008 input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.MessageVersionNumber1 == input.MessageVersionNumber1 ||
                    (this.MessageVersionNumber1 != null &&
                    this.MessageVersionNumber1.Equals(input.MessageVersionNumber1))
                ) && 
                (
                    this.MessageReleaseNumber2 == input.MessageReleaseNumber2 ||
                    (this.MessageReleaseNumber2 != null &&
                    this.MessageReleaseNumber2.Equals(input.MessageReleaseNumber2))
                ) && 
                (
                    this.AssociationAssignedCode3 == input.AssociationAssignedCode3 ||
                    (this.AssociationAssignedCode3 != null &&
                    this.AssociationAssignedCode3.Equals(input.AssociationAssignedCode3))
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
                if (this.MessageVersionNumber1 != null)
                    hashCode = hashCode * 59 + this.MessageVersionNumber1.GetHashCode();
                if (this.MessageReleaseNumber2 != null)
                    hashCode = hashCode * 59 + this.MessageReleaseNumber2.GetHashCode();
                if (this.AssociationAssignedCode3 != null)
                    hashCode = hashCode * 59 + this.AssociationAssignedCode3.GetHashCode();
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
