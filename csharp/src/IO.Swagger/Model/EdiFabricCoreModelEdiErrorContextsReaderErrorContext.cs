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
    /// EdiFabricCoreModelEdiErrorContextsReaderErrorContext
    /// </summary>
    [DataContract]
    public partial class EdiFabricCoreModelEdiErrorContextsReaderErrorContext :  IEquatable<EdiFabricCoreModelEdiErrorContextsReaderErrorContext>, IValidatableObject
    {
        /// <summary>
        /// Defines ReaderErrorCode
        /// </summary>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum ReaderErrorCodeEnum
        {
            
            /// <summary>
            /// Enum Unknown for value: Unknown
            /// </summary>
            [EnumMember(Value = "Unknown")]
            Unknown = 1,
            
            /// <summary>
            /// Enum InvalidSpecOrAssembly for value: InvalidSpecOrAssembly
            /// </summary>
            [EnumMember(Value = "InvalidSpecOrAssembly")]
            InvalidSpecOrAssembly = 2,
            
            /// <summary>
            /// Enum InvalidControlStructure for value: InvalidControlStructure
            /// </summary>
            [EnumMember(Value = "InvalidControlStructure")]
            InvalidControlStructure = 3,
            
            /// <summary>
            /// Enum ImproperEndOfFile for value: ImproperEndOfFile
            /// </summary>
            [EnumMember(Value = "ImproperEndOfFile")]
            ImproperEndOfFile = 4,
            
            /// <summary>
            /// Enum InvalidInterchangeContent for value: InvalidInterchangeContent
            /// </summary>
            [EnumMember(Value = "InvalidInterchangeContent")]
            InvalidInterchangeContent = 5,
            
            /// <summary>
            /// Enum DemoVersion for value: DemoVersion
            /// </summary>
            [EnumMember(Value = "DemoVersion")]
            DemoVersion = 6
        }

        /// <summary>
        /// Gets or Sets ReaderErrorCode
        /// </summary>
        [DataMember(Name="readerErrorCode", EmitDefaultValue=false)]
        public ReaderErrorCodeEnum? ReaderErrorCode { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="EdiFabricCoreModelEdiErrorContextsReaderErrorContext" /> class.
        /// </summary>
        /// <param name="readerErrorCode">readerErrorCode.</param>
        /// <param name="messageErrorContext">messageErrorContext.</param>
        /// <param name="message">message.</param>
        public EdiFabricCoreModelEdiErrorContextsReaderErrorContext(ReaderErrorCodeEnum? readerErrorCode = default(ReaderErrorCodeEnum?), EdiFabricCoreModelEdiErrorContextsMessageErrorContext messageErrorContext = default(EdiFabricCoreModelEdiErrorContextsMessageErrorContext), string message = default(string))
        {
            this.ReaderErrorCode = readerErrorCode;
            this.MessageErrorContext = messageErrorContext;
            this.Message = message;
        }
        

        /// <summary>
        /// Gets or Sets MessageErrorContext
        /// </summary>
        [DataMember(Name="messageErrorContext", EmitDefaultValue=false)]
        public EdiFabricCoreModelEdiErrorContextsMessageErrorContext MessageErrorContext { get; set; }

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
            sb.Append("class EdiFabricCoreModelEdiErrorContextsReaderErrorContext {\n");
            sb.Append("  ReaderErrorCode: ").Append(ReaderErrorCode).Append("\n");
            sb.Append("  MessageErrorContext: ").Append(MessageErrorContext).Append("\n");
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
            return this.Equals(input as EdiFabricCoreModelEdiErrorContextsReaderErrorContext);
        }

        /// <summary>
        /// Returns true if EdiFabricCoreModelEdiErrorContextsReaderErrorContext instances are equal
        /// </summary>
        /// <param name="input">Instance of EdiFabricCoreModelEdiErrorContextsReaderErrorContext to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(EdiFabricCoreModelEdiErrorContextsReaderErrorContext input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.ReaderErrorCode == input.ReaderErrorCode ||
                    (this.ReaderErrorCode != null &&
                    this.ReaderErrorCode.Equals(input.ReaderErrorCode))
                ) && 
                (
                    this.MessageErrorContext == input.MessageErrorContext ||
                    (this.MessageErrorContext != null &&
                    this.MessageErrorContext.Equals(input.MessageErrorContext))
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
                if (this.ReaderErrorCode != null)
                    hashCode = hashCode * 59 + this.ReaderErrorCode.GetHashCode();
                if (this.MessageErrorContext != null)
                    hashCode = hashCode * 59 + this.MessageErrorContext.GetHashCode();
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