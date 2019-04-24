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
    /// EdiFabricCoreModelEdiEdifactS004
    /// </summary>
    [DataContract]
    public partial class EdiFabricCoreModelEdiEdifactS004 :  IEquatable<EdiFabricCoreModelEdiEdifactS004>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="EdiFabricCoreModelEdiEdifactS004" /> class.
        /// </summary>
        /// <param name="date1">date1.</param>
        /// <param name="time2">time2.</param>
        public EdiFabricCoreModelEdiEdifactS004(string date1 = default(string), string time2 = default(string))
        {
            this.Date1 = date1;
            this.Time2 = time2;
        }
        
        /// <summary>
        /// Gets or Sets Date1
        /// </summary>
        [DataMember(Name="date_1", EmitDefaultValue=false)]
        public string Date1 { get; set; }

        /// <summary>
        /// Gets or Sets Time2
        /// </summary>
        [DataMember(Name="time_2", EmitDefaultValue=false)]
        public string Time2 { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class EdiFabricCoreModelEdiEdifactS004 {\n");
            sb.Append("  Date1: ").Append(Date1).Append("\n");
            sb.Append("  Time2: ").Append(Time2).Append("\n");
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
            return this.Equals(input as EdiFabricCoreModelEdiEdifactS004);
        }

        /// <summary>
        /// Returns true if EdiFabricCoreModelEdiEdifactS004 instances are equal
        /// </summary>
        /// <param name="input">Instance of EdiFabricCoreModelEdiEdifactS004 to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(EdiFabricCoreModelEdiEdifactS004 input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Date1 == input.Date1 ||
                    (this.Date1 != null &&
                    this.Date1.Equals(input.Date1))
                ) && 
                (
                    this.Time2 == input.Time2 ||
                    (this.Time2 != null &&
                    this.Time2.Equals(input.Time2))
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
                if (this.Date1 != null)
                    hashCode = hashCode * 59 + this.Date1.GetHashCode();
                if (this.Time2 != null)
                    hashCode = hashCode * 59 + this.Time2.GetHashCode();
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
