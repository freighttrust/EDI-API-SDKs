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
    /// EdiFabricCoreModelEdiX12GE
    /// </summary>
    [DataContract]
    public partial class EdiFabricCoreModelEdiX12GE :  IEquatable<EdiFabricCoreModelEdiX12GE>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="EdiFabricCoreModelEdiX12GE" /> class.
        /// </summary>
        /// <param name="numberOfIncludedSets1">numberOfIncludedSets1.</param>
        /// <param name="groupControlNumber2">groupControlNumber2.</param>
        public EdiFabricCoreModelEdiX12GE(string numberOfIncludedSets1 = default(string), string groupControlNumber2 = default(string))
        {
            this.NumberOfIncludedSets1 = numberOfIncludedSets1;
            this.GroupControlNumber2 = groupControlNumber2;
        }
        
        /// <summary>
        /// Gets or Sets NumberOfIncludedSets1
        /// </summary>
        [DataMember(Name="numberOfIncludedSets_1", EmitDefaultValue=false)]
        public string NumberOfIncludedSets1 { get; set; }

        /// <summary>
        /// Gets or Sets GroupControlNumber2
        /// </summary>
        [DataMember(Name="groupControlNumber_2", EmitDefaultValue=false)]
        public string GroupControlNumber2 { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class EdiFabricCoreModelEdiX12GE {\n");
            sb.Append("  NumberOfIncludedSets1: ").Append(NumberOfIncludedSets1).Append("\n");
            sb.Append("  GroupControlNumber2: ").Append(GroupControlNumber2).Append("\n");
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
            return this.Equals(input as EdiFabricCoreModelEdiX12GE);
        }

        /// <summary>
        /// Returns true if EdiFabricCoreModelEdiX12GE instances are equal
        /// </summary>
        /// <param name="input">Instance of EdiFabricCoreModelEdiX12GE to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(EdiFabricCoreModelEdiX12GE input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.NumberOfIncludedSets1 == input.NumberOfIncludedSets1 ||
                    (this.NumberOfIncludedSets1 != null &&
                    this.NumberOfIncludedSets1.Equals(input.NumberOfIncludedSets1))
                ) && 
                (
                    this.GroupControlNumber2 == input.GroupControlNumber2 ||
                    (this.GroupControlNumber2 != null &&
                    this.GroupControlNumber2.Equals(input.GroupControlNumber2))
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
                if (this.NumberOfIncludedSets1 != null)
                    hashCode = hashCode * 59 + this.NumberOfIncludedSets1.GetHashCode();
                if (this.GroupControlNumber2 != null)
                    hashCode = hashCode * 59 + this.GroupControlNumber2.GetHashCode();
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