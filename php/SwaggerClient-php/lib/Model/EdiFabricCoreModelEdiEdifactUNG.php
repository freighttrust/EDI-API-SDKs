<?php
/**
 * EdiFabricCoreModelEdiEdifactUNG
 *
 * PHP version 5
 *
 * @category Class
 * @package  Swagger\Client
 * @author   Swagger Codegen team
 * @link     https://github.com/swagger-api/swagger-codegen
 */

/**
 * EdiFabric API
 *
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
 * 
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 * Swagger Codegen version: 2.4.4
 */

/**
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen
 * Do not edit the class manually.
 */

namespace Swagger\Client\Model;

use \ArrayAccess;
use \Swagger\Client\ObjectSerializer;

/**
 * EdiFabricCoreModelEdiEdifactUNG Class Doc Comment
 *
 * @category Class
 * @package  Swagger\Client
 * @author   Swagger Codegen team
 * @link     https://github.com/swagger-api/swagger-codegen
 */
class EdiFabricCoreModelEdiEdifactUNG implements ModelInterface, ArrayAccess
{
    const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $swaggerModelName = 'EdiFabric.Core.Model.Edi.Edifact.UNG';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerTypes = [
        'message_group_identification_1' => 'string',
        'applicationsenderidentificatio_n_2' => '\Swagger\Client\Model\EdiFabricCoreModelEdiEdifactS006',
        'applicationrecipientidentificatio_n_3' => '\Swagger\Client\Model\EdiFabricCoreModelEdiEdifactS007',
        'dateandtimeofpreparatio_n_4' => '\Swagger\Client\Model\EdiFabricCoreModelEdiEdifactS004',
        'group_reference_number_5' => 'string',
        'controlling_agency_6' => 'string',
        'messageversio_n_7' => '\Swagger\Client\Model\EdiFabricCoreModelEdiEdifactS008',
        'd_application_password_8' => 'string'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerFormats = [
        'message_group_identification_1' => null,
        'applicationsenderidentificatio_n_2' => null,
        'applicationrecipientidentificatio_n_3' => null,
        'dateandtimeofpreparatio_n_4' => null,
        'group_reference_number_5' => null,
        'controlling_agency_6' => null,
        'messageversio_n_7' => null,
        'd_application_password_8' => null
    ];

    /**
     * Array of property to type mappings. Used for (de)serialization
     *
     * @return array
     */
    public static function swaggerTypes()
    {
        return self::$swaggerTypes;
    }

    /**
     * Array of property to format mappings. Used for (de)serialization
     *
     * @return array
     */
    public static function swaggerFormats()
    {
        return self::$swaggerFormats;
    }

    /**
     * Array of attributes where the key is the local name,
     * and the value is the original name
     *
     * @var string[]
     */
    protected static $attributeMap = [
        'message_group_identification_1' => 'messageGroupIdentification_1',
        'applicationsenderidentificatio_n_2' => 'applicationsenderidentificatioN_2',
        'applicationrecipientidentificatio_n_3' => 'applicationrecipientidentificatioN_3',
        'dateandtimeofpreparatio_n_4' => 'dateandtimeofpreparatioN_4',
        'group_reference_number_5' => 'groupReferenceNumber_5',
        'controlling_agency_6' => 'controllingAgency_6',
        'messageversio_n_7' => 'messageversioN_7',
        'd_application_password_8' => 'd_ApplicationPassword_8'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'message_group_identification_1' => 'setMessageGroupIdentification1',
        'applicationsenderidentificatio_n_2' => 'setApplicationsenderidentificatioN2',
        'applicationrecipientidentificatio_n_3' => 'setApplicationrecipientidentificatioN3',
        'dateandtimeofpreparatio_n_4' => 'setDateandtimeofpreparatioN4',
        'group_reference_number_5' => 'setGroupReferenceNumber5',
        'controlling_agency_6' => 'setControllingAgency6',
        'messageversio_n_7' => 'setMessageversioN7',
        'd_application_password_8' => 'setDApplicationPassword8'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'message_group_identification_1' => 'getMessageGroupIdentification1',
        'applicationsenderidentificatio_n_2' => 'getApplicationsenderidentificatioN2',
        'applicationrecipientidentificatio_n_3' => 'getApplicationrecipientidentificatioN3',
        'dateandtimeofpreparatio_n_4' => 'getDateandtimeofpreparatioN4',
        'group_reference_number_5' => 'getGroupReferenceNumber5',
        'controlling_agency_6' => 'getControllingAgency6',
        'messageversio_n_7' => 'getMessageversioN7',
        'd_application_password_8' => 'getDApplicationPassword8'
    ];

    /**
     * Array of attributes where the key is the local name,
     * and the value is the original name
     *
     * @return array
     */
    public static function attributeMap()
    {
        return self::$attributeMap;
    }

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @return array
     */
    public static function setters()
    {
        return self::$setters;
    }

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @return array
     */
    public static function getters()
    {
        return self::$getters;
    }

    /**
     * The original name of the model.
     *
     * @return string
     */
    public function getModelName()
    {
        return self::$swaggerModelName;
    }

    

    

    /**
     * Associative array for storing property values
     *
     * @var mixed[]
     */
    protected $container = [];

    /**
     * Constructor
     *
     * @param mixed[] $data Associated array of property values
     *                      initializing the model
     */
    public function __construct(array $data = null)
    {
        $this->container['message_group_identification_1'] = isset($data['message_group_identification_1']) ? $data['message_group_identification_1'] : null;
        $this->container['applicationsenderidentificatio_n_2'] = isset($data['applicationsenderidentificatio_n_2']) ? $data['applicationsenderidentificatio_n_2'] : null;
        $this->container['applicationrecipientidentificatio_n_3'] = isset($data['applicationrecipientidentificatio_n_3']) ? $data['applicationrecipientidentificatio_n_3'] : null;
        $this->container['dateandtimeofpreparatio_n_4'] = isset($data['dateandtimeofpreparatio_n_4']) ? $data['dateandtimeofpreparatio_n_4'] : null;
        $this->container['group_reference_number_5'] = isset($data['group_reference_number_5']) ? $data['group_reference_number_5'] : null;
        $this->container['controlling_agency_6'] = isset($data['controlling_agency_6']) ? $data['controlling_agency_6'] : null;
        $this->container['messageversio_n_7'] = isset($data['messageversio_n_7']) ? $data['messageversio_n_7'] : null;
        $this->container['d_application_password_8'] = isset($data['d_application_password_8']) ? $data['d_application_password_8'] : null;
    }

    /**
     * Show all the invalid properties with reasons.
     *
     * @return array invalid properties with reasons
     */
    public function listInvalidProperties()
    {
        $invalidProperties = [];

        return $invalidProperties;
    }

    /**
     * Validate all the properties in the model
     * return true if all passed
     *
     * @return bool True if all properties are valid
     */
    public function valid()
    {
        return count($this->listInvalidProperties()) === 0;
    }


    /**
     * Gets message_group_identification_1
     *
     * @return string
     */
    public function getMessageGroupIdentification1()
    {
        return $this->container['message_group_identification_1'];
    }

    /**
     * Sets message_group_identification_1
     *
     * @param string $message_group_identification_1 message_group_identification_1
     *
     * @return $this
     */
    public function setMessageGroupIdentification1($message_group_identification_1)
    {
        $this->container['message_group_identification_1'] = $message_group_identification_1;

        return $this;
    }

    /**
     * Gets applicationsenderidentificatio_n_2
     *
     * @return \Swagger\Client\Model\EdiFabricCoreModelEdiEdifactS006
     */
    public function getApplicationsenderidentificatioN2()
    {
        return $this->container['applicationsenderidentificatio_n_2'];
    }

    /**
     * Sets applicationsenderidentificatio_n_2
     *
     * @param \Swagger\Client\Model\EdiFabricCoreModelEdiEdifactS006 $applicationsenderidentificatio_n_2 applicationsenderidentificatio_n_2
     *
     * @return $this
     */
    public function setApplicationsenderidentificatioN2($applicationsenderidentificatio_n_2)
    {
        $this->container['applicationsenderidentificatio_n_2'] = $applicationsenderidentificatio_n_2;

        return $this;
    }

    /**
     * Gets applicationrecipientidentificatio_n_3
     *
     * @return \Swagger\Client\Model\EdiFabricCoreModelEdiEdifactS007
     */
    public function getApplicationrecipientidentificatioN3()
    {
        return $this->container['applicationrecipientidentificatio_n_3'];
    }

    /**
     * Sets applicationrecipientidentificatio_n_3
     *
     * @param \Swagger\Client\Model\EdiFabricCoreModelEdiEdifactS007 $applicationrecipientidentificatio_n_3 applicationrecipientidentificatio_n_3
     *
     * @return $this
     */
    public function setApplicationrecipientidentificatioN3($applicationrecipientidentificatio_n_3)
    {
        $this->container['applicationrecipientidentificatio_n_3'] = $applicationrecipientidentificatio_n_3;

        return $this;
    }

    /**
     * Gets dateandtimeofpreparatio_n_4
     *
     * @return \Swagger\Client\Model\EdiFabricCoreModelEdiEdifactS004
     */
    public function getDateandtimeofpreparatioN4()
    {
        return $this->container['dateandtimeofpreparatio_n_4'];
    }

    /**
     * Sets dateandtimeofpreparatio_n_4
     *
     * @param \Swagger\Client\Model\EdiFabricCoreModelEdiEdifactS004 $dateandtimeofpreparatio_n_4 dateandtimeofpreparatio_n_4
     *
     * @return $this
     */
    public function setDateandtimeofpreparatioN4($dateandtimeofpreparatio_n_4)
    {
        $this->container['dateandtimeofpreparatio_n_4'] = $dateandtimeofpreparatio_n_4;

        return $this;
    }

    /**
     * Gets group_reference_number_5
     *
     * @return string
     */
    public function getGroupReferenceNumber5()
    {
        return $this->container['group_reference_number_5'];
    }

    /**
     * Sets group_reference_number_5
     *
     * @param string $group_reference_number_5 group_reference_number_5
     *
     * @return $this
     */
    public function setGroupReferenceNumber5($group_reference_number_5)
    {
        $this->container['group_reference_number_5'] = $group_reference_number_5;

        return $this;
    }

    /**
     * Gets controlling_agency_6
     *
     * @return string
     */
    public function getControllingAgency6()
    {
        return $this->container['controlling_agency_6'];
    }

    /**
     * Sets controlling_agency_6
     *
     * @param string $controlling_agency_6 controlling_agency_6
     *
     * @return $this
     */
    public function setControllingAgency6($controlling_agency_6)
    {
        $this->container['controlling_agency_6'] = $controlling_agency_6;

        return $this;
    }

    /**
     * Gets messageversio_n_7
     *
     * @return \Swagger\Client\Model\EdiFabricCoreModelEdiEdifactS008
     */
    public function getMessageversioN7()
    {
        return $this->container['messageversio_n_7'];
    }

    /**
     * Sets messageversio_n_7
     *
     * @param \Swagger\Client\Model\EdiFabricCoreModelEdiEdifactS008 $messageversio_n_7 messageversio_n_7
     *
     * @return $this
     */
    public function setMessageversioN7($messageversio_n_7)
    {
        $this->container['messageversio_n_7'] = $messageversio_n_7;

        return $this;
    }

    /**
     * Gets d_application_password_8
     *
     * @return string
     */
    public function getDApplicationPassword8()
    {
        return $this->container['d_application_password_8'];
    }

    /**
     * Sets d_application_password_8
     *
     * @param string $d_application_password_8 d_application_password_8
     *
     * @return $this
     */
    public function setDApplicationPassword8($d_application_password_8)
    {
        $this->container['d_application_password_8'] = $d_application_password_8;

        return $this;
    }
    /**
     * Returns true if offset exists. False otherwise.
     *
     * @param integer $offset Offset
     *
     * @return boolean
     */
    public function offsetExists($offset)
    {
        return isset($this->container[$offset]);
    }

    /**
     * Gets offset.
     *
     * @param integer $offset Offset
     *
     * @return mixed
     */
    public function offsetGet($offset)
    {
        return isset($this->container[$offset]) ? $this->container[$offset] : null;
    }

    /**
     * Sets value based on offset.
     *
     * @param integer $offset Offset
     * @param mixed   $value  Value to be set
     *
     * @return void
     */
    public function offsetSet($offset, $value)
    {
        if (is_null($offset)) {
            $this->container[] = $value;
        } else {
            $this->container[$offset] = $value;
        }
    }

    /**
     * Unsets offset.
     *
     * @param integer $offset Offset
     *
     * @return void
     */
    public function offsetUnset($offset)
    {
        unset($this->container[$offset]);
    }

    /**
     * Gets the string presentation of the object
     *
     * @return string
     */
    public function __toString()
    {
        if (defined('JSON_PRETTY_PRINT')) { // use JSON pretty print
            return json_encode(
                ObjectSerializer::sanitizeForSerialization($this),
                JSON_PRETTY_PRINT
            );
        }

        return json_encode(ObjectSerializer::sanitizeForSerialization($this));
    }
}


