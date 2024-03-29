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
    /// EdiFabricCoreModelEdiErrorContextsSegmentErrorContext
    /// </summary>
    [DataContract]
    public partial class EdiFabricCoreModelEdiErrorContextsSegmentErrorContext :  IEquatable<EdiFabricCoreModelEdiErrorContextsSegmentErrorContext>, IValidatableObject
    {
        /// <summary>
        /// Defines Codes
        /// </summary>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum CodesEnum
        {
            
            /// <summary>
            /// Enum UnrecognizedSegment for value: UnrecognizedSegment
            /// </summary>
            [EnumMember(Value = "UnrecognizedSegment")]
            UnrecognizedSegment = 1,
            
            /// <summary>
            /// Enum RequiredSegmentMissing for value: RequiredSegmentMissing
            /// </summary>
            [EnumMember(Value = "RequiredSegmentMissing")]
            RequiredSegmentMissing = 2,
            
            /// <summary>
            /// Enum LoopExceedsMaximumUse for value: LoopExceedsMaximumUse
            /// </summary>
            [EnumMember(Value = "LoopExceedsMaximumUse")]
            LoopExceedsMaximumUse = 3,
            
            /// <summary>
            /// Enum SegmentExceedsMaximumUse for value: SegmentExceedsMaximumUse
            /// </summary>
            [EnumMember(Value = "SegmentExceedsMaximumUse")]
            SegmentExceedsMaximumUse = 4,
            
            /// <summary>
            /// Enum SegmentNotInProperSequence for value: SegmentNotInProperSequence
            /// </summary>
            [EnumMember(Value = "SegmentNotInProperSequence")]
            SegmentNotInProperSequence = 5,
            
            /// <summary>
            /// Enum LoopBelowMinimumUse for value: LoopBelowMinimumUse
            /// </summary>
            [EnumMember(Value = "LoopBelowMinimumUse")]
            LoopBelowMinimumUse = 6,
            
            /// <summary>
            /// Enum SegmentBelowMinimumUse for value: SegmentBelowMinimumUse
            /// </summary>
            [EnumMember(Value = "SegmentBelowMinimumUse")]
            SegmentBelowMinimumUse = 7
        }


        /// <summary>
        /// Gets or Sets Codes
        /// </summary>
        [DataMember(Name="codes", EmitDefaultValue=false)]
        public List<CodesEnum> Codes { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="EdiFabricCoreModelEdiErrorContextsSegmentErrorContext" /> class.
        /// </summary>
        /// <param name="name">name.</param>
        /// <param name="position">position.</param>
        /// <param name="value">value.</param>
        /// <param name="codes">codes.</param>
        /// <param name="errors">errors.</param>
        /// <param name="message">message.</param>
        public EdiFabricCoreModelEdiErrorContextsSegmentErrorContext(string name = default(string), int? position = default(int?), string value = default(string), List<CodesEnum> codes = default(List<CodesEnum>), List<EdiFabricCoreModelEdiErrorContextsDataElementErrorContext> errors = default(List<EdiFabricCoreModelEdiErrorContextsDataElementErrorContext>), string message = default(string))
        {
            this.Name = name;
            this.Position = position;
            this.Value = value;
            this.Codes = codes;
            this.Errors = errors;
            this.Message = message;
        }
        
        /// <summary>
        /// Gets or Sets Name
        /// </summary>
        [DataMember(Name="name", EmitDefaultValue=false)]
        public string Name { get; set; }

        /// <summary>
        /// Gets or Sets Position
        /// </summary>
        [DataMember(Name="position", EmitDefaultValue=false)]
        public int? Position { get; set; }

        /// <summary>
        /// Gets or Sets Value
        /// </summary>
        [DataMember(Name="value", EmitDefaultValue=false)]
        public string Value { get; set; }


        /// <summary>
        /// Gets or Sets Errors
        /// </summary>
        [DataMember(Name="errors", EmitDefaultValue=false)]
        public List<EdiFabricCoreModelEdiErrorContextsDataElementErrorContext> Errors { get; set; }

        /// <summary>
        /// Gets or Sets Message
        /// </summary>
        [DataMember(Name="message", EmitDefaultValue=false)]
        public string Message { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class EdiFabricCoreModelEdiErrorContextsSegmentErrorContext {\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
            sb.Append("  Position: ").Append(Position).Append("\n");
            sb.Append("  Value: ").Append(Value).Append("\n");
            sb.Append("  Codes: ").Append(Codes).Append("\n");
            sb.Append("  Errors: ").Append(Errors).Append("\n");
            sb.Append("  Message: ").Append(Message).Append("\n");
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
            return this.Equals(input as EdiFabricCoreModelEdiErrorContextsSegmentErrorContext);
        }

        /// <summary>
        /// Returns true if EdiFabricCoreModelEdiErrorContextsSegmentErrorContext instances are equal
        /// </summary>
        /// <param name="input">Instance of EdiFabricCoreModelEdiErrorContextsSegmentErrorContext to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(EdiFabricCoreModelEdiErrorContextsSegmentErrorContext input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Name == input.Name ||
                    (this.Name != null &&
                    this.Name.Equals(input.Name))
                ) && 
                (
                    this.Position == input.Position ||
                    (this.Position != null &&
                    this.Position.Equals(input.Position))
                ) && 
                (
                    this.Value == input.Value ||
                    (this.Value != null &&
                    this.Value.Equals(input.Value))
                ) && 
                (
                    this.Codes == input.Codes ||
                    this.Codes != null &&
                    this.Codes.SequenceEqual(input.Codes)
                ) && 
                (
                    this.Errors == input.Errors ||
                    this.Errors != null &&
                    this.Errors.SequenceEqual(input.Errors)
                ) && 
                (
                    this.Message == input.Message ||
                    (this.Message != null &&
                    this.Message.Equals(input.Message))
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
                if (this.Name != null)
                    hashCode = hashCode * 59 + this.Name.GetHashCode();
                if (this.Position != null)
                    hashCode = hashCode * 59 + this.Position.GetHashCode();
                if (this.Value != null)
                    hashCode = hashCode * 59 + this.Value.GetHashCode();
                if (this.Codes != null)
                    hashCode = hashCode * 59 + this.Codes.GetHashCode();
                if (this.Errors != null)
                    hashCode = hashCode * 59 + this.Errors.GetHashCode();
                if (this.Message != null)
                    hashCode = hashCode * 59 + this.Message.GetHashCode();
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
