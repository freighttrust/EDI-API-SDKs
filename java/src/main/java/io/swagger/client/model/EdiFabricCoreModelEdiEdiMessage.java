/*
 * EdiFabric API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


package io.swagger.client.model;

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import io.swagger.client.model.EdiFabricCoreModelEdiErrorContextsMessageErrorContext;
import java.io.IOException;

/**
 * EdiFabricCoreModelEdiEdiMessage
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2019-04-24T17:09:45.649Z")
public class EdiFabricCoreModelEdiEdiMessage {
  @SerializedName("errorContext")
  private EdiFabricCoreModelEdiErrorContextsMessageErrorContext errorContext = null;

  public EdiFabricCoreModelEdiEdiMessage errorContext(EdiFabricCoreModelEdiErrorContextsMessageErrorContext errorContext) {
    this.errorContext = errorContext;
    return this;
  }

   /**
   * Get errorContext
   * @return errorContext
  **/
  @ApiModelProperty(value = "")
  public EdiFabricCoreModelEdiErrorContextsMessageErrorContext getErrorContext() {
    return errorContext;
  }

  public void setErrorContext(EdiFabricCoreModelEdiErrorContextsMessageErrorContext errorContext) {
    this.errorContext = errorContext;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    EdiFabricCoreModelEdiEdiMessage ediFabricCoreModelEdiEdiMessage = (EdiFabricCoreModelEdiEdiMessage) o;
    return Objects.equals(this.errorContext, ediFabricCoreModelEdiEdiMessage.errorContext);
  }

  @Override
  public int hashCode() {
    return Objects.hash(errorContext);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class EdiFabricCoreModelEdiEdiMessage {\n");
    
    sb.append("    errorContext: ").append(toIndentedString(errorContext)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(java.lang.Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }

}

